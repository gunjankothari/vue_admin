import AdminPage from '/';
import HomePage from './pages/home';
import GroupingPage from './pages/grouping'
import UsersPage from './pages/users';

export default [{
    path: '/admin',
    name: 'Admin Settings',
    component: AdminPage,
    children: [{
        path: '/',
        component: HomePage,
    }, {
        path: 'grouping',
        component: GroupingPage
    }, {
        path: 'users',
        component: UsersPage
    }]
}]