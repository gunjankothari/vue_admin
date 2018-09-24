import VueRouter from 'vue-router'
import {
    shallowMount,
    createLocalVue
} from '@vue/test-utils'

import BreadCrumb from '@/admin/components/breadcrumb'

describe('Breadcrumb Component', () => {
    let localVue, wrapper, router
    beforeEach(() => {
        localVue = createLocalVue()
        localVue.use(VueRouter)
        router = new VueRouter()
        wrapper = shallowMount(BreadCrumb, {
            localVue,
            router,
            propsData: {
            }
        })
    })
    it('Breadcrumb is a Vue instance', () => {
        expect(wrapper.isVueInstance()).toBeTruthy()
    })
})