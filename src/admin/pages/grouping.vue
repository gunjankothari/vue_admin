<template>
    <b-container fluid class="container-main">
        <b-row>
            <b-col>
                <breadcrumb></breadcrumb>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <tree-view :data="group"></tree-view>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import * as _ from 'lodash';
import BreadcrumbComponent from '../components/breadcrumb';
import TreeViewRendererComponent from '../components/treeViewRenderer';
import GROUPING_DATA from '../data/grouping-data';
    export default {
        data() {
            return {
                group: GROUPING_DATA
            }
        },
        components: {
            'breadcrumb': BreadcrumbComponent,
            'tree-view': TreeViewRendererComponent
        }
    }
</script>

<style lang="scss" scoped>
    .container-main {
        padding: 35px 80px;
        background: #fcfcfc;
    }
</style>