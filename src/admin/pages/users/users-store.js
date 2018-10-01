import Vue from 'vue';
import Vuex from 'vuex';
import usersData from '../../data/users-data';
Vue.use(Vuex);

export default new Vuex.Store({

    store: {
        usersData
    },
    state: {
        users: usersData
    },
    getters: {
    },
    mutations: {
    },
    actions: {
    }
});

