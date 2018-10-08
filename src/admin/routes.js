import AdminPage from './index.vue';
import HomePage from './pages/home/index';

// Lazy Loading Vue Components
function loadView (view) {
    return () => import(/* webpackChunkName: "view-[request]" */ `./pages/${view}.vue`)
}

export default [{
    path: '/admin',
    name: 'Admin Settings',
    component: AdminPage,
    children: [{
        name: 'Home',
        path: '/',
        component: HomePage,
    }, {
        name: 'Grouping',
        path: 'grouping',
        component: loadView('grouping/index')
    }, {
        name: 'Users',
        path: 'users',
        component: loadView('users/index')
    }]
}]
