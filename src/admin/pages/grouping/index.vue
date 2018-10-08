<template>
    <b-container fluid class="container-main">
        <b-row>
            <b-col>
                <breadcrumb></breadcrumb>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <tree-view-renderer :data="group"></tree-view-renderer>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import * as _ from 'lodash';
import breadcrumb from '../../components/breadcrumb';
import treeViewRenderer from '../../components/treeView/index';
import { mapGetters } from 'vuex';

    export default {
        computed:{
            ...mapGetters([
                'group'
            ])
        },
        components: {
            breadcrumb,
            treeViewRenderer
        }
    }
</script>

<style lang="less" scoped>
    .container-main {
        padding: 35px 80px;
        background: #fcfcfc;
    }
</style>