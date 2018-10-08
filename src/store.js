import Vue from 'vue';
import Vuex from 'vuex';
import AdminStore from './admin/store/index';

Vue.use(Vuex);

export default new Vuex.Store({
    namespaced: true,
    modules:{
        ...AdminStore
    }
})
