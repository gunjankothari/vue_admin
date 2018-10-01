import {
    shallowMount,
    createLocalVue
} from '@vue/test-utils';
import Vuex from 'vuex';
import BootstrapVue from 'bootstrap-vue'

import HomePage from '@/admin/pages/home';
import adminData from '@/admin/data/admin-data';

const localVue = createLocalVue();

localVue.use(Vuex);
localVue.use(BootstrapVue);

describe('Admin Home Page Testing', () => {
    let wrapper;
    let store, getters;

    beforeEach(() => {
        getters = {
            cards: () => adminData,
        }

        store = new Vuex.Store({
            getters
        })
    })
    
    it('Admin Home Page is Vue Instance', function(){
        wrapper = shallowMount(HomePage, {
            localVue,
            store,
            propsData: {
                data: {
                    searchText: ''
                }
            }
        })
        expect(wrapper.isVueInstance()).toBeTruthy();

        expect(wrapper.vm.filteredData.length).toBe(7);

        wrapper.setData({
            searchText: 'Grouping'
        });

        expect(wrapper.vm.filteredData.length).toBe(1);

        wrapper.vm.searchHandler("Users");

        expect(wrapper.vm.filteredData.length).toBe(1);
    })
});