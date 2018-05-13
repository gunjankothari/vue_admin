import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/common/pages/HelloWorld'
import PageNotFound from '@/common/pages/PageNotFound'
import AdminRoutes from '@/admin/routes'
Vue.use(Router)
export default new Router({
    routes: [
        ...AdminRoutes,
        {
            path: '/',
            name: 'Home',
            component: HelloWorld
        }, {
            path: '*',
            name: 'PageNotFound',
            component: PageNotFound
        }
    ]
})