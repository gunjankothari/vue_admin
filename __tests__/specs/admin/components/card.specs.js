import {
    shallowMount,
    createLocalVue
} from '@vue/test-utils'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue';

import Card from '@/admin/components/card'

const localVue = createLocalVue();

localVue.use(VueRouter);
localVue.use(BootstrapVue);

describe('Component', () => {
    let wrapper, router
    beforeEach(() => {        
        
        router = new VueRouter()

        wrapper = shallowMount(Card, {
            localVue,
            router,
            propsData: {
                data: {
                    id: 1,
                    header: 'User Settings',
                    icon: 'regular/user',
                    items: [{
                        label: 'Users',
                        link: 'users'
                    }, {
                        label: 'Roles',
                        link: 'roles'
                    }, {
                        label: 'Password Settings',
                        link: 'password-settings'
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
    it('Card has a id', () => {
        expect(wrapper.props().data.id).toBeDefined();
    })

    it('Card has an item array', () => {
        expect(Array.isArray(wrapper.props().data.items)).toBe(true);
    })
})
