// 扩展vue原有的功能：全局组件，自定义指令，挂载原型方法，注意：没有全局过滤器
// 这就是插件
// vue2.0插件写法要素：导出一个对象，有install函数，默认传入了Vue构造函数，Vue基础之上扩展
// vue3.0插件写法要素：导出一个对象，有install函数，默认传入了app应用实例，app基础上扩展
// import XtxSkeleton from './xtx-skeleton.vue';
// import XtxCarousel from './xtx-carousel.vue';
// import XtxMore from './xtx-more.vue';
// import XtxBread from './xtx-bread.vue';
// import XtxBreadItem from './xtx-bread-item.vue';
import defaultImg from '@/assets/images/200.png';

// 导入library文件夹下的所有组件
// 批量导入需要使用一个函数 require.context(dir,deep,matching)
// 参数：1. 目录  2. 是否加载子目录  3. 加载的正则匹配
const importFn = require.context('./', false, /\.vue$/);
// console.dir(importFn.keys()) 文件名称数组

export default {
  install(app) {
    // 在app上进行拓展，app提供component directive 函数
    // 如果要挂载原型 app.config.globalProperties方式
    // app.component(XtxSkeleton.name, XtxSkeleton);
    // app.component(XtxCarousel.name, XtxCarousel);
    // app.component(XtxMore.name, XtxMore);
    // app.component(XtxBread.name, XtxBread);
    // app.component(XtxBreadItem.name, XtxBreadItem);
    // defineDirective(app);

    // 批量注册全局组件
    importFn.keys().forEach((key) => {
      // 导入组件
      const component = importFn(key).default;
      // 注册组件
      app.component(component.name, component);
    });

    // 定义指令
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
