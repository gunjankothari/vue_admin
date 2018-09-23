import Vue from 'vue'
import VueRouter from 'vue-router'
import { shallowMount, createLocalVue } from '@vue/test-utils'

import App from '@/admin/components/card'

describe('Component', () => {
    let localVue, wrapper, router; 
    beforeEach(() => {
        localVue = createLocalVue();
        localVue.use(VueRouter);
        router = new VueRouter()
        wrapper = shallowMount(App,{
            localVue,
            router,
            propsData: {
                data: {
                    id: 1,
                    header: "User Settings",
                    icon: "regular/user",
                    items: [{
                        label: "Users",
                        link: "users"
                    }, {
                        label: "Roles",
                        link: "roles"
                    }, {
                        label: "Password Settings",
                        link: "password-settings"
                    }]
                }
            }
        })
    })
    it('Card is a Vue instance', () => {
        expect(wrapper.isVueInstance()).toBeTruthy()
    })
    it('Card has a icon', () => {
        expect(wrapper.props().data.icon).toBeDefined();
    })
})