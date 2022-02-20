
//引用路由组件
// import Home from '@/pages/Home'
// import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
import Trade from '@/pages/Trade'
import Pay from '@/pages/Pay'
import PaySuccess from '@/pages/PaySuccess'
import Center from '@/pages/Center'
//引入二级路由
import MyOrder from '@/pages/Center/myOrder'
import GroupOrder from '@/pages/Center/groupOrder'


/*
当打包构建应用时，JavaScript包会变得非常大，影响页面加载。
如果我们能把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应组件，这样就更加高效了。
*/

//配置路由
export default [
    {
        path: "/center",
        component: Center,
        meta: { show: true },
        //二级路由
        children: [
            {
                path: "myorder",
                component: MyOrder,
            },
            {
                path: "grouporder",
                component: GroupOrder,
            },
            {
                path: '/center',
                redirect: '/center/myorder'
            },
        ]
    },
    {
        path: "/paysuccess",
        component: PaySuccess,
        meta: { show: true }
    },
    {
        path: "/pay",
        component: Pay,
        meta: { show: true },
        beforeEnter(to, from, next) {
            if (from.path == '/trade') {
                next();
            } else {
                next(false)
            }
        }
    },
    {
        path: "/trade",
        component: Trade,
        meta: { show: true },
        //路由独享守卫
        /* 只能从购物车界面, 才能跳转到交易界面 */
        beforeEnter(to, from, next) {
            if (from.path == '/shopcart') {
                next();
            } else {
                next(false)
            }
        }
    },
    {
        path: "/shopcart",
        component: ShopCart,
        meta: { show: true }
    },
    {
        path: "/addCartSuccess",
        name: "addCartSuccess",
        component: AddCartSuccess,
        meta: { show: true }
    },
    {
        path: "/detail/:skuid",
        component: Detail,
        meta: { show: true }
    },
    {
        path: "/home",
        component: ()=>import("@/pages/Home"),
        meta: { show: true }
    },
    {
        name: 'search',  // 是当前路由的标识名称
        meta: { show: true },
        path: '/search/:keyword?',
        component: ()=>import("@/pages/Search"),
        // 将params参数和query参数映射成属性传入路由组件
        props: route => ({keyword3: route.params.keyword, keyword4: route.query.keyword2})
      },
    {
        path: "/login",
        component: Login,
        meta: { show: false }

    },
    {
        path: "/register",
        component: Register,
        meta: { show: false }

    },
    //重定向，在项目跑起来的时候，访问/,立马让他定向到首页
    {
        path: "*",
        redirect: "/home"
    }
]