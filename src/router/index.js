import Vue from 'vue';
import Router from 'vue-router';
import Login from './views/Login';
import NotFund from './views/404';
import Home from './views/Home';
import Menu from './views/system/Menu';
import Resource from './views/system/Resource';
import Role from './views/system/Role';
import User from './views/system/User';
import ChangePassword from './views/ChangePassword'
import Index from './views/Index'

import Definition from './views/Custom-parsing/definition'
import Choose from './views/Upload-parsing/choose'
import FirstPage from './views/Custom-parsing/firstpage'

// 懒加载
/*const Login = ()=> import('./views/Login')
const NotFund = ()=> import('./views/404')
const Home = ()=>import('./views/Home')
const Menu = ()=>import('./views/system/Menu')
const Resource = ()=>import('./views/system/Resource')
const Role = ()=>import('./views/system/Role')
const User = ()=>import('./views/system/User')
const ChangePassword = ()=>import('./views/ChangePassword')
const Index = ()=>import('./views/Index')
const Definition = ()=>import('./views/Custom-parsing/definition')
const Choose = ()=>import('./views/Upload-parsing/choose')
const FirstPage = ()=>import('./views/Custom-parsing/firstpage')
const Leading = ()=>import('./views/Upload-parsing/leading')
const oneUpload = ()=> import('./views/Upload-parsing/information')*/




Vue.use(Router);

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            component: Home,
            redirect: '/first',
            children: [
                {
                    path: '/index',
                    name: 'index',
                    component: Index
                },
                {
                    path: '/definition',
                    name: 'definition',
                    component: Definition
                },
                {
                    path: '/first',
                    name: 'firstPage',
                    component: FirstPage
                },
                {
                    path: '/choose',
                    name: 'choose',
                    component: Choose,
                },
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
                {
                    path: '/system/menu',
                    name: 'menu',
                    component: Menu
                },
                {
                    path: '/system/user',
                    name: 'user',
                    component: User
                },
                {
                    path: '/system/resource',
                    name: 'resource',
                    component: Resource
                },
                {
                    path: '/system/role',
                    name: 'role',
                    component: Role
                },
                {
                    path: '/changepassword',
                    name: 'changepassword',
                    component: ChangePassword
                },
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '*',
            name: '404',
            component: NotFund
        }
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
