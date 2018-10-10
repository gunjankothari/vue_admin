import Vuex from 'vuex';
import {
    shallowMount,
    createLocalVue
} from '@vue/test-utils'
import VueRouter from 'vue-router'
//import mockAxios from 'jest-mock-axios';

import UserStore from '@/admin/store/modules/users'
import UserData from '@/admin/store/data/users-data'

const localVue = createLocalVue();

localVue.use(Vuex);

describe('Admin User Store', () => {

    let store;

    afterEach(() => {
        // cleaning up the mess left behind the previous test
        //mockAxios.reset();
    });

    beforeEach(()=>{
        store = new Vuex.Store(UserStore);
    })

    it('isLoading mutation', () => {
        const state = {
            loading: true
        }
        UserStore.mutations.isLoading(state, false);
        expect(state.loading).toBe(false)
    })

    it('should get data from API and commit new use list to vuex', async () => {
        let catchFn = jest.fn(),
            thenFn = jest.fn();

        let state = {
            users: [],
            loading: false
        }
        
        let commit = (action, payload) => {
            UserStore.mutations[action](state, payload);
        }
        UserStore.actions.fetchUsers({commit})
            .then( res => {
                expect(thenFn).toBeCalledWith(UserData);
                expect(state.users.length).toBe(20);
                expect(state.loading).toBe(false);
            })
            .catch( () => {
                expect(thenFn).toBeCalledWith(UserData);
            })
    })

    it('should get the userlist', () => {
        expect(store.getters['users'].length).toBe(0);
    })
})