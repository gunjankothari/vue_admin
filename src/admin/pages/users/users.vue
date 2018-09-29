<template>
    <b-container fluid class="container-main">
        <b-row>
            <b-col cols="0" sm="3" lg="2" class="sidebar d-none d-sm-flex">
                <div>
                    Sidebar
                </div>
            </b-col>
            <b-col cols="12" sm="9" lg="10">
                <b-row>
                    <b-col>
                        <breadcrumb></breadcrumb>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <users-info-grid :users="users" :tempUserInfo="tempUserInfo"></users-info-grid>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
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
        },
        data: function () {
            return {
                users: this.$store.state.usersStore.state.users,
                tempUserInfo: this.$store.state.usersStore.state.users
            }
        }

    }
</script>

<style lang="less" scoped>
    .container-main {
        background: #fcfcfc;
    }
    .sidebar{
        display: flex;
        width: 300px;
        background: #eee;
    }

</style>
