import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';

const routes = [
  {
    path: '/', // 루트 디렉토리에 접근했을 때
    name: 'Home',
    component: HomeView, // 홈 컴포넌트 보여주기
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView,
  },
];

// 라우트 정보를 담고 있는 라우터 객체
const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;
