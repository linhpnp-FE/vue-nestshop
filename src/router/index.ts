// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'home', component: ()=> import('@/views/Home.vue' },
        {path: '/test-api', name: 'test-api', component: () => import('@/views/TestApi.vue'),},
    ],
});

export default router;
