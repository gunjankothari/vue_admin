<template>
    <b-container fluid class="container-main">
        <b-row>
            <b-col>
                <breadcrumb></breadcrumb>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <tree-view-renderer :data="groups"></tree-view-renderer>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import breadcrumb from '../../components/breadcrumb';
import treeViewRenderer from '../../components/treeView/index';

export default {
    created(){
        this.$store.dispatch('admin/fetchGroups');
    },
    computed:{
        groups(){
            console.log(this.$store.getters['admin/groups']);
            return this.$store.getters['admin/groups'];
        }
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