<template>
    <b-container fluid class="container-main d-flex flex-column">
        <b-row>
            <b-col>
                <breadcrumb></breadcrumb>
            </b-col>
        </b-row>
        <b-row class="d-flex flex-grow-1 flex-shrink-1">
            <div class="d-none d-sm-flex flex-row">
                <div class="sidebar d-flex p-0">
                    <div class="sidebar-wrapper flex-grow-1 " :class="{ hidden: hideSidebar }" >
                        
                    </div>
                    <div class="sidebar-opener align-self-start" @click="toggleSidebar()">
                        <icon name="angle-right" size="md" scale="1.5"></icon>
                    </div>
                </div>
                <div class="ml-3 w-100">
                    <users-info-grid :users="users" :tempUserInfo="tempUserInfo"></users-info-grid>
                </div>
            </div>
        </b-row>
    </b-container>
</template>

<script>
import * as _ from 'lodash';
import Breadcrumb from '../../components/breadcrumb';
import UsersInfoGrid from './usersInfoGrid'
    export default {
        components: {
            Breadcrumb,
            UsersInfoGrid
        },
        data: function () {
            return {
                users: this.$store.state.usersStore.state.users,
                tempUserInfo: this.$store.state.usersStore.state.users,
                hideSidebar: false
            }
        },
        methods: {
            toggleSidebar(){
                this.hideSidebar = !this.hideSidebar;
            }
        }
    }
</script>

<style lang="less" scoped>
    .container-main {
        background: #fcfcfc;
    }
    .sidebar{
        //height: 100vh;        
    }
    .sidebar-wrapper{
        background-color: #fff;
        box-shadow: 0 6px 12px 0 rgba(86,108,118,0.05);
        border: 1px solid #E4EDF2;
        width: 240px;

        &.hidden{
            width: 0;
        }
    }
    .sidebar-opener {
        background: #fff;
        padding: 10px;
        flex-grow: 0;
        box-shadow: 3px 6px 12px 0 rgba(86, 108, 118, 0.05);
        border: 1px solid #E4EDF2;
        border-radius: 0 6px 6px 0;
        border-left: none;
        margin-left: -1px;
    }

</style>
