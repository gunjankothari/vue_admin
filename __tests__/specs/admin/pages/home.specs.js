import {
    shallowMount,
    createLocalVue
} from '@vue/test-utils';
import Vuex from 'vuex';
import BootstrapVue from 'bootstrap-vue'

import HomePage from '@/admin/pages/home/index';
import adminData from '@/admin/store/data/admin-data';

const localVue = createLocalVue();

localVue.use(Vuex);
localVue.use(BootstrapVue);

describe('Admin Home Page Testing', () => {
    let wrapper;
    let store;

    beforeEach(() => {
        store = new Vuex.Store({
            state: {
                cards: adminData
            },
            getters: {
                'admin/cards': state => state.cards
            }
        });

        wrapper = shallowMount(HomePage, {
            localVue,
            store,
            propsData: {
                data: {
                    searchText: ''
                }
            }
        });

    })
    
    it('Admin Home Page is Vue Instance', function(){
        
        expect(wrapper.isVueInstance()).toBeTruthy();
    });

    it('Should have search for Users', function () {
        expect(wrapper.vm.filteredData.length).toBe(7);

        wrapper.setData({
            searchText: 'Grouping'
        });

        expect(wrapper.vm.filteredData.length).toBe(1);

        wrapper.vm.searchHandler("Users");

        expect(wrapper.vm.filteredData.length).toBe(1);
    })
});