//配置路由的地方
import Vue from 'vue';
import routes from './routes'
//引入vue-router路由插件
import VueRouter from 'vue-router';
//使用插件
Vue.use(VueRouter);
//引入store
import store from '@/store'
//先把VueRoutter原型对象的push,先保存一份
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;

//重写Push | replace
//第一个参数：告诉原来push方法，你往哪里跳转（传递哪些参数）
//第二个参数：成功回调
//第三个参数：失败的回调
//call || apply区别
//相同点：都可以调用函数一次，都可以篡改函数的上下文一次
//不同点：call与apply传递参数：call传递参数用逗号隔开，apply方法执行，传递数组
VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        originPush.call(this, location, resolve, reject);
    } else {
        originPush.call(this, location, () => { }, () => { });
    }
}
VueRouter.prototype.replace = function (location, resolve, reject) {
    if (resolve && reject) {
        originReplace.replace(this, location, resolve, reject);
    } else {
        originReplace.replace(this, location, () => { }, () => { });
    }
}


//对外暴露VueRouter类的实例
let router = new VueRouter({
    //配置路由
    routes,
    //滚动行为
    scrollBehavior(to, from, savedPosition) {
        //返回的这个y=0，代表的滚动条在最上方
        return { y: 0 }
    }
})

//全局守卫:前置守卫(在路由跳转之间进行判断)
router.beforeEach(async(to,from,next)=>{
    //to:可以获取到你要跳转到那个路由信息
    //fron:可以获取到你从哪个路由而来的信息
    //next:放行函数  next()放行  next(path)放行到指令路由   next(false);
    //为了测试先全都放行
    // next();
    // console.log(store)
    //用户登录了,才会有token,未登录一定不会有
    let token = store.state.user.token;
    //用户信息
    let name = store.state.user.userInfo.name;


    //用户已经登陆了
    if (token) {
        //用户已经登陆了还想去login[不能去，停留在首页]
        if (to.path=='/login'||to.path=='/register') {
            next('/')
            // console.log('111')
        } else {
            //登陆,去的不是login 【home |search|detail|shopcart】
            //如果用户名已有
            if (name) {
                next();
                // console.log('222')
            } else {
                //没有用户信息,派发action让仓库存储用户信息在跳转
               try {
                   //获取用户信息成功
                await store.dispatch('getUserInfo')
                //放行
                next();
                // console.log('333')
               } catch (error) {
                   //token失效了获取不到用户信息,从新登录
                   //清除token
                   await store.dispatch('userLogout');
                   next('/login');
               }
            }
        }
    } else {
        //未登录
        next();
        // console.log('444')

    }
})



export default router;