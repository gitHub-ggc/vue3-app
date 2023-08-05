import {createRouter, createWebHashHistory} from 'vue-router'
import {useStore} from 'vuex'
import NProgress from 'nprogress'
const routes = [
    {
        path:"/",
        redirect:"/home",
        component:() => import('@/views/home.vue')
    },
    {
        path:"/home",
        component:() => import('@/views/home/home.vue')
    },
    {
        path:"/dK",
        component:() => import('@/views/dK/dK.vue')
    },
    {
        path:`/dk-detail/:id`,
        component:() => import('@/views/dK/components/dkDetail.vue')
    },
    {
        path:"/login",
        component:() => import('@/views/login.vue')
    },
    {
        path:"/hide",
        component:() => import('@/views/hide.vue')
    },
    {
        path:"/*",
        redirect:"/404"
    },
    {
        path:"/404",
        component:() => import('@/views/404.vue')
    }
]
const router = createRouter({
    history:createWebHashHistory(),
    routes
})

router.beforeEach((to:any, from:any, next:any) => {
    let tokenStore = useStore();
    NProgress.start();
    if(tokenStore.state.Token.loginToken){
        next();
    }else{
        if(to.path === '/login'){
            next();
        }else if(to.path === '/hide'){
            next();
        }else{
            next('/login');
        }
    }
    NProgress.done();
    // to and from are both route objects. must call `next`.
})
export default router