import { createRouter, createWebHashHistory } from 'vue-router';
// import HomeView from '../views/HomeView.vue'
import TopCategory from '@/views/category';
import SubCategory from '@/views/category/sub';

const Layout = () => import('@/views/Layout');
const Home = () => import('@/views/home/index');
const Goods = () => import('@/views/goods/index');

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      { path: '/', component: Home },
      { path: '/product/:id', component: Goods },
    ],
  },
  {
    path: '/category/:id',
    component: TopCategory,
  },
  {
    path: '/category/sub/:id',
    component: SubCategory,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { left: 0, top: 0 };
  },
});

export default router;
