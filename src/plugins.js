import Vue from 'vue'
import BootstrapVueLayout from 'bootstrap-vue/src/components/layout'
import BootstrapFormInputGroup from 'bootstrap-vue/src/components/input-group'
import BootstrapFormInput from 'bootstrap-vue/src/components/form-input'
import BootstrapButtonGroup from 'bootstrap-vue/src/components/button'
import BootstrapButton from 'bootstrap-vue/src/components/button-group'
import BootstrapCard from 'bootstrap-vue/src/components/card'
import { Grid, GridInstaller } from '@progress/kendo-grid-vue-wrapper'
import { DataSource,HierarchicalDataSource,GanttDataSource,GanttDependencyDataSource,PivotDataSource,SchedulerDataSource,
    TreeListDataSource,DataSourceInstaller } from '@progress/kendo-datasource-vue-wrapper'
import { Button,ButtonGroup,ButtonGroupButton,ToolBar,
    ToolBarItem,ButtonsInstaller } from '@progress/kendo-buttons-vue-wrapper'

import { Window,WindowInstaller } from '@progress/kendo-window-vue-wrapper'


//Plugins
Vue.use(BootstrapVueLayout);
Vue.use(BootstrapFormInputGroup);
Vue.use(BootstrapFormInput);
Vue.use(BootstrapButtonGroup);
Vue.use(BootstrapButton);
Vue.use(BootstrapCard);
Vue.use(ButtonsInstaller)
Vue.use(DataSourceInstaller)
Vue.use(GridInstaller)
Vue.use(WindowInstaller)
