import {
    shallowMount,
    createLocalVue
} from '@vue/test-utils'
import Router from 'vue-router'
import Breadcrumb from '@/admin/components/breadcrumb'

describe('Breadcrumb Component', () => {
    it('Breadcrumb is a Vue instance', () => {
        const localVue = createLocalVue();
        localVue.use(Router);
        const routeInst = new Router();
        const wrapper = shallowMount(Breadcrumb,{
            localVue,
            router: routeInst
        });
        expect(wrapper.isVueInstance()).toBeTruthy()
    });

    // it('has to be Admin Route', () => {
    //     const localVue = createLocalVue();
    //     localVue.use(Router);
    //     const routeInst = new Router({ routes });
    //     const wrapper = shallowMount(Breadcrumb, {
    //         localVue,
    //         router: routeInst,
    //         mocks: {
    //             $route: {
    //                 path: '/admin'
    //             }
    //         }
    //     });
    //     //expect(wrapper.vm.currentRoute[0].label).toBe('Admin Settings');
    //     //expect(wrapper.vm.currentRoute[0].link).toBe('/admin');
    // })

})