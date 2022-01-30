//配置路由的地方
import Vue from 'vue';
import VueRouter from 'vue-router';
//使用插件
Vue.use(VueRouter);
//引用路由组件
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Register from '@/pages/Register'
import Login from '@/pages/Login'

//配置路由
export default new VueRouter({
    //配置路由
    routes:[
        {
            path:"/home",
            component:Home
        },
        {
            path:"/search",
            component:Search
        },
        {
            path:"/register",
            component:Register
        },
        {
            path:"/login",
            component:Login
        },
    ]
})