import {
    shallowMount,
    createLocalVue
} from '@vue/test-utils'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue';

import SearchBox from '@/admin/components/searchBox'

const localVue = createLocalVue();

localVue.use(VueRouter);
localVue.use(BootstrapVue);


describe('SearchBox Component', () => {
    let wrapper, router
    beforeEach(() => {

        router = new VueRouter()

        wrapper = shallowMount(SearchBox, {
            localVue,
            router
        })
    })
    it('SearchBox is a Vue instance', () => {
        expect(wrapper.isVueInstance()).toBeTruthy()
    })

    it('Searchbox search event is emitted', () => {
        wrapper.vm.search();
        expect(wrapper.emitted('onSearch')).toBeTruthy()
    });
})