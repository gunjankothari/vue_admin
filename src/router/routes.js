import PageNotFound from '@/common/pages/PageNotFound'
import AdminRoutes from '@/admin/routes'

export default [
...AdminRoutes,
{
    path: '/',
    name: 'Home',
    redirect: '/admin'
}, {
    path: '*',
    name: 'PageNotFound',
    component: PageNotFound
}]