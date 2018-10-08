import {
    shallowMount,
    createLocalVue
} from '@vue/test-utils';
import Vuex from 'vuex';
import BootstrapVue from 'bootstrap-vue'

import UsersPage from '@/admin/pages/users/users';
import usersData from '@/admin/data/users-data';

const localVue = createLocalVue();

localVue.use(Vuex);
localVue.use(BootstrapVue);

describe('Admin Users Page Testing', () => {
    let wrapper;
    let store, getters;

    beforeEach(() => {
        store = new Vuex.Store({
            store: {
                usersData
            },
            state: {
                users: usersData
            },
        })
    })

    it('Admin Users Page is Vue Instance', function () {
        wrapper = shallowMount(UsersPage, {
            localVue,
            store
        })
        expect(wrapper.isVueInstance()).toBeTruthy();

    })
});