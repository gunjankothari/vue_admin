import Vue from 'vue';
import Vuex from 'vuex';
import adminModule from './admin/store/index';

Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        admin: { 
            namespaced: true,
            ...adminModule,          
        }
    }
})
