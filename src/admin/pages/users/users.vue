<template>
    <b-container fluid class="container-main">
        <b-row>
            <b-col>
                <breadcrumb></breadcrumb>
            </b-col>
        </b-row>
        <users-info-grid></users-info-grid>
    </b-container>
</template>

<script>
import * as _ from 'lodash';
import breadcrumb from '../../components/breadcrumb';
import UsersInfoGrid from './usersInfoGrid'

    export default {
        components: {
            breadcrumb,
            UsersInfoGrid
        }
    }
</script>

<style lang="less" scoped>
    .container-main {
        padding: 35px 80px;
        background: #fcfcfc;
    }
</style>
