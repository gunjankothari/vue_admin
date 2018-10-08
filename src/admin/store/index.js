import grouping from './modules/grouping';
import users from './modules/users';
import navigation from './modules/navigations';

export default {
    modules: {
        namespaced: true,
        grouping,
        navigation,
        users
    }
};