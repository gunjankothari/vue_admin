import Vuex from 'vuex';
import {
    shallowMount,
    createLocalVue
} from '@vue/test-utils'
import VueRouter from 'vue-router'
import mockAxios from 'axios';

import UserStore from '@/admin/store/modules/users'
import UserData from '@/admin/store/data/users-data'

const localVue = createLocalVue();

localVue.use(Vuex);

describe('Admin User Store', () => {

    let store, commit, state;

    beforeEach(()=>{
        store = new Vuex.Store(UserStore);

        state = {
            users: [],
            loading: false
        }

        commit = (action, payload) => {
            UserStore.mutations[action](state, payload);
        }

    })

    it('isLoading mutation', () => {
        UserStore.mutations.isLoading(state, true);
        expect(state.loading).toBe(true)
    })

    it('should get users from API and commit new use list to vuex', async () => {

        mockAxios.get.mockImplementationOnce(() =>
            Promise.resolve({
                data: UserData
            })
        );
        const response = await UserStore.actions.fetchUsers({commit})
        expect(mockAxios.get).toHaveBeenCalledTimes(1);
        expect(mockAxios.get).toHaveBeenCalledWith("https://api.myjson.com/bins/luhu4")
        expect(response.length).toEqual(state.users.length);
    })

    it('Should throw an error while fetching users', async () => {
        mockAxios.get(() =>
            Promise.reject()
        );
        UserStore.actions.fetchUsers({ commit })
            .then( response => {
                expect(mockAxios.get).toHaveBeenCalled();
                expect(state.users.length).toEqual(0);
            })
            .catch(error => {
                console.log(error)
                expect(state.users.length).toEqual(0);
            });
    })

    it('should not update uselist', () => {
        expect(store.getters['users'].length).toBe(0);
    })
})
