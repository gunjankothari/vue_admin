// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import 'es6-promise/auto';
import Icon from 'vue-awesome/components/Icon'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@progress/kendo-ui'
import '@progress/kendo-theme-default/dist/all.css'
import store from './store';
import usersStore from './admin/pages/users/users-store';

import App from './App'
import router from './router'
import './plugins'


import { Grid, GridInstaller } from '@progress/kendo-grid-vue-wrapper'
Vue.use(GridInstaller)
import { DataSource,HierarchicalDataSource,GanttDataSource,
    GanttDependencyDataSource,PivotDataSource,SchedulerDataSource,
    TreeListDataSource,DataSourceInstaller } from '@progress/kendo-datasource-vue-wrapper'
Vue.use(DataSourceInstaller)

Vue.config.productionTip = false

//Components
Vue.component('icon', Icon)


/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    usersStore,
    components: { App },
    template: '<App/>'
})
