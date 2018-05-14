<template>
    <b-container fluid class="container-main">
        <b-row>
            <b-col>
                <breadcrumb></breadcrumb>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import * as _ from 'lodash';
import breadcrumb from '../components/breadcrumb';

    export default {
        components: {
            breadcrumb
        }
    }
</script>

<style lang="scss" scoped>
    .container-main {
        padding: 35px 80px;
        background: #fcfcfc;
    }
</style>