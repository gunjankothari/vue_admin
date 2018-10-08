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
                        <h5>User Group +</h5>
                        <b-container fluid class="container-main" >
                            <b-row>
                                <b-col lg="12" md="12" sm="12" >
                                    <b-input-group size="md" class="mb-3 search-box " >
                                        <b-form-input id="search-textbox" placeholder="Search dashboard " ></b-form-input>
                                    </b-input-group>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col lg="12" md="12" sm="12" >
                                    <label><router-link :to="{ path: '/admin/users' }" replace>System User(14)</router-link> </label>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col lg="12" md="12" sm="12" >
                                    <label><router-link :to="{ path: '/admin/users' }" replace>LDAP User(23)</router-link></label>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col lg="12" md="12" sm="12" >
                                    <label><router-link :to="{ path: '/admin/users' }" replace>Radis User(4)</router-link></label>
                                </b-col>
                            </b-row>
                        </b-container>
                    </div>
                    <div class="sidebar-opener align-self-start" @click="toggleSidebar()">
                        <icon name="angle-right" size="md" scale="1.5"></icon>
                    </div>
                </div>
                <div class="ml-3 w-100 content-main-panel">
                    <users-info-grid :users="users" :tempUserInfo="tempUserInfo"></users-info-grid>
                </div>
                <div class="sidebar-right d-flex p-0">
                    <div class="edit-sidebar-wrapper flex-grow-1 " :class="{ hidden: isEditButtonClick }" >
                        <b-container fluid class="container-main" >
                            <b-row>
                                <b-col lg="8" md="8" sm="8" >
                                    <h4 style="margin: 0">{{usernm}}</h4>
                                </b-col>
                                <b-col lg="4" md="4" sm="4" class="header-button">
                                    <a role="button" href="#" class="k-button k-bare k-button-icon k-window-action" aria-label="Save" v-show='saveOredit'><span class="k-icon k-i-save"></span></a>
                                    <a role="button" href="#" class="k-button k-bare k-button-icon k-window-action" aria-label="Edit" v-show='!saveOredit' ><span class="k-icon k-i-edit"></span></a>
                                    <a role="button" href="#" class="k-button k-bare k-button-icon k-window-action" aria-label="Delete"><span class="k-icon k-i-delete"></span></a>
                                    <a role="button" href="#" class="k-button k-bare k-button-icon k-window-action" aria-label="Close"><span class="k-icon k-i-close"></span></a>

                                </b-col>
                            </b-row><hr><br>
                            <b-row>
                                <b-col lg="3" md="12" sm="12" >
                                    <label >First Name </label>
                                </b-col>
                                <b-col lg="3" md="12" sm="12" >
                                    <label>Last Name</label>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col lg="3" md="12" sm="12" >
                                    <div v-show='!isEdit'><label><b>{{firstname}}</b></label></div>
                                    <div v-show='isEdit'><input type="text" v-model="firstname"/></div>
                                </b-col>
                                <b-col lg="6" md="12" sm="12" >
                                    <div v-show='!isEdit'><label><b>{{lastname}}</b></label></div>
                                    <div v-show='isEdit'><input type="text" v-model="lastname"/></div>

                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col lg="3" md="12" sm="12" >
                                    <label>Username</label>
                                </b-col>
                                <b-col lg="3" md="12" sm="12" >
                                    <label>Email</label>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col lg="3" md="12" sm="12" >

                                    <div v-show='!isEdit'><label><b>{{usernm}}</b></label></div>
                                    <div v-show='isEdit'><input type="text" v-model="usernm"/></div>
                                </b-col>
                                <b-col lg="3" md="12" sm="12" >
                                    <div v-show='!isEdit'><label><b>{{email}}</b></label></div>
                                    <div v-show='isEdit'><input type="text" v-model="email"/></div>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col lg="3" md="12" sm="12" >
                                    <label>Password</label>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col lg="6" md="12" sm="12" >
                                    <label><a href="#">Click here to change </a></label>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col lg="3" md="12" sm="12" >

                                    <label>Status</label>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col lg="6" md="12" sm="12" >
                                    <label class="switch" >
                                        <input type="checkbox" name="user-enable-checkbox"  v-model="isuserenable"/>

                                        <span class="slider round"></span>

                                    </label>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col lg="6" md="12" sm="12" >
                                    <label>Assigned Groups</label>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col lg="6" md="12" sm="12" >

                                    <div v-show='!isEdit'><label><b>{{assignedgroups}}</b></label></div>
                                    <div v-show='isEdit'><input type="text" v-model="assignedgroups"/></div>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col lg="6" md="12" sm="12" >
                                    <label>Role</label>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col lg="6" md="12" sm="12" >

                                    <div v-show='!isEdit'><label><b>{{userrole}}</b></label></div>
                                    <div v-show='isEdit'><input type="text" v-model="userrole"/></div>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col lg="6" md="12" sm="12" >
                                    <label>Description</label>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col lg="6" md="12" sm="12" >
                                    <div v-show='!isEdit'><label><b>{{description}}</b></label></div>
                                    <div v-show='isEdit'><input type="text" v-model="description"/></div>

                                </b-col>
                            </b-row>
                        </b-container>
                    </div>
                </div>
            </div>
        </b-row>
    </b-container>
</template>

<script>

    const tempUserList = [{
        path:'admin/user',
        text :'System Users'
    },{
        path:'admin/user',
        text :'LDAP Users'
    },{
        path:'admin/user',
        text :'Radis Users'
    }]

    import * as _ from 'lodash';
    import Breadcrumb from '../../components/breadcrumb';
    import UsersInfoGrid from './usersInfoGrid'
    export default {
        components: {
            Breadcrumb,
            UsersInfoGrid
        },
        computed: {
            users(){
                return this.$store.getters['admin/users'];
            },
            tempUserInfo(){
                return this.$store.getters['admin/users'];
            }
        },
        data: function () {
            return {
                hideSidebar: false,
                isEditButtonClick:true,
                isEdit:false,
                saveOredit:false,
                email:'rahul@gmail.com',
                isuserenable:true,
                assignedgroups:'Java Developer',
                description:'Rahul is a java developer',
                userrole:'Admin',
                firstname:'Rahul',
                lastname:'Patel',
                usernm:'RahulPatel',
                userList : tempUserList,
            }
        },
        methods: {
            toggleSidebar(){
                this.hideSidebar = !this.hideSidebar;
                if(this.hideSidebar==false)
                    this.isEditButtonClick = true
            }
        }
    }
</script>

<style lang="less" scoped>
    .container-main {
        background: #fcfcfc;
    }
    .sidebar-right{
        position: absolute;
        z-index: 1;
        right: 0;
        top: 30px;
        height: 100%;
    }
    hr{
        margin-bottom: 1rem;
        border: 0;
        border-top: 1px solid rgba(0, 0, 0, 0.1);
    }
    .header-button{
        text-align: right;
    }
    .sidebar-wrapper{
        background-color: #fff;
        box-shadow: 0 6px 12px 0 rgba(86,108,118,0.05);
        border: 1px solid #E4EDF2;
        width: 240px;

        &.hidden{
            display: none;
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
    .edit-sidebar-wrapper{
        background-color: #fff;
        box-shadow: 0 6px 12px 0 rgba(86,108,118,0.05);
        border: 1px solid #E4EDF2;
        width: 450px;

        &.hidden{
            display: none;
        }
    }
    .content-main-panel {
        width: 100%;
        float: left;
        background: #fff;
        padding: 15px 10px;
        border-radius:5px;
        margin-right: 10px;
        border: 1px solid #E4EDF2;
    }
</style>
