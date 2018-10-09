import {
    shallowMount,
    createLocalVue
} from '@vue/test-utils';
import Vuex from 'vuex';
import BootstrapVue from 'bootstrap-vue'

import UsersPage from '@/admin/pages/users/index';
import usersData from '@/admin/store/data/users-data';

const localVue = createLocalVue();

localVue.use(Vuex);
localVue.use(BootstrapVue);

describe('Admin Users Page Testing', () => {
    let wrapper;
    let store;

    beforeEach(() => {
        store = new Vuex.Store({
            state: {
                users: usersData
            },
            getters: {
                'admin/users': state => state.users
            }
        })
        wrapper = shallowMount(UsersPage, {
            localVue,
            store
        })
    })

    it('Admin Users Page is Vue Instance', function () {
        expect(wrapper.isVueInstance()).toBeTruthy();
    })

    it('should toggle sidebar', () => {
        expect(wrapper.vm.hideSidebar).toBe(false)
        wrapper.vm.toggleSidebar();
        expect(wrapper.vm.hideSidebar).toBe(true)
    });
});