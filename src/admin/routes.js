import AdminPage from './index.vue';
import HomePage from './pages/home';

// Lazy Loading Vue Components
function loadView (view) {
    return () => import(/* webpackChunkName: "view-[request]" */ `./pages/${view}.vue`)
}

export default [{
    path: '/admin',
    name: 'Admin Settings',
    component: AdminPage,
    children: [{
        path: '/',
        component: HomePage,
    }, {
        path: 'grouping',
        component: loadView('grouping')
    }, {
        path: 'users',
        component: loadView('users/users')
    }]
}]
