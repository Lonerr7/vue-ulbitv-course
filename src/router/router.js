import { createRouter, createWebHashHistory } from 'vue-router';
import Main from '../pages/Main.vue';
import PostPage from '../pages/PostPage.vue';
import About from '../pages/About.vue';
import PostDetails from '../components/PostDetails.vue';

const routes = [
  {
    path: '/',
    component: Main,
  },
  {
    path: '/posts',
    component: PostPage,
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/posts/:id',
    component: PostDetails,
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export default router;
