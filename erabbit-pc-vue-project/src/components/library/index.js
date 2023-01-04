// 扩展vue原有的功能：全局组件，自定义指令，挂载原型方法，注意：没有全局过滤器
// 这就是插件
// vue2.0插件写法要素：导出一个对象，有install函数，默认传入了Vue构造函数，Vue基础之上扩展
// vue3.0插件写法要素：导出一个对象，有install函数，默认传入了app应用实例，app基础上扩展
import XtxSkeleton from './xtx-skeleton.vue';
import XtxCarousel from './xtx-carousel.vue';
import XtxMore from './xtx-more.vue';
import defaultImg from '@/assets/images/200.png';

export default {
  install(app) {
    // 在app上进行拓展，app提供component directive 函数
    // 如果要挂载原型 app.config.globalProperties方式
    app.component(XtxSkeleton.name, XtxSkeleton);
    app.component(XtxCarousel.name, XtxCarousel);
    app.component(XtxMore.name, XtxMore);
    defineDirective(app);
  },
};

// 指令
const defineDirective = (app) => {
  // 图片懒加载指令
  // 设置全局指令
  app.directive('lazyload', {
    mounted(el, binding) {
      // el为dom对象
      // binding为自定义指令的值
      const observer = new IntersectionObserver(
        ([{ isIntersecting }]) => {
          if (isIntersecting) {
            // 停止监听
            observer.unobserve(el);
            el.onerror = () => {
              // 设置dom元素src的参数
              el.src = defaultImg;
            };
            el.src = binding.value;
          }
        },
        {
          // 交叉，懒加载的图片显示多少开始加载
          threshold: 0.01,
        }
      );
      // 开始监听
      observer.observe(el);
    },
  });
};
