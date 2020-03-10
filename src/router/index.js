import Vue from 'vue';
import VueRouter from 'vue-router';

import User from '../views/system/User.vue';
import Home from '../views/Home.vue';


// 懒加载
/*const Login = ()=> import('./views/Login')
const NotFund = ()=> import('./views/404')
const Home = ()=>import('./views/Home')
const oneUpload = ()=> import('./views/Upload-parsing/information')*/




Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            component: Home,
            redirect: '/user',
            children: [
                {
                    path: '/user',
                    name: 'user',
                    component: User
                }
                /*                {
                                    path: '/leading',
                                    name: 'leading',
                                    component: Leading,
                                },
                                {
                                    path: '/information/:id',
                                    name: 'information',
                                    component: oneUpload,
                                },*/
            ]
        },
       {
            path: '/user',
            name: 'user',
            component: User
        },
        /*
        {
            path: '*',
            name: '404',
            component: NotFund
        }*/
    ]
});

// 添加路由守卫
router.beforeEach((to, from, next) => {
    next();
    // const isLogin = !!localStorage.flowToken;
    // if (to.path === '/login') {
    //     next();
    // } else {
    //     isLogin ? next() : next({
    //         path: '/login',
    //         query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
    //     });
    // }

});

export default router;
