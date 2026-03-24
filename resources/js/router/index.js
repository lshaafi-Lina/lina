import { createRouter, createWebHistory } from 'vue-router';

// استيراد المكونات (الصفحات)
import Home from '../pages/Home.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    }
  
];

const router = createRouter({
    history: createWebHistory(), // يعتمد على روابط المتصفح العادية
    routes
});

export default router;
