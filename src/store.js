import Vue from 'vue';
import Vuex from 'vuex';
import AdminStore from './admin/store';


Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        ...AdminStore.store
    },
    mutations: {
        ...AdminStore.mutations
    },
    actions: {
        ...AdminStore.actions
    },
    getters: {
        ...AdminStore.getters
    }
})
