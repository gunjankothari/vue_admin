<template>
    <div>
        <b-container fluid class="container-main">
            <b-row>
                <b-col lg="12" md="9" sm="9">
                    Showing {{filteredUsers.length}} users of LDAP Users Group
                </b-col>
            </b-row><br>
            <b-row>
                <b-col lg="2" md="9" sm="9" class="col-xs-12 col-sm-6 col-md-3 example-col" style="padding-left: 0;">
                    <b-input-group size="md" class="mb-3 search-box " >
                        <b-form-input id="search-textbox" placeholder="Search users..." v-model="searchUserText" @keyup="filteredUsers"></b-form-input>
                    </b-input-group>
                </b-col>
            </b-row>
        </b-container>
        <div id="vueapp" class="vue-app" >
            <kendo-datasource ref="localDataSource" :data="filteredUsers">
            </kendo-datasource>

            <kendo-grid
                :height="500"
                :data-source-ref="'localDataSource'"
                :resizable="true"
                :filterable="true"
                :sortable-allow-unsort="true"
                :sortable-show-indexes="true"
                :scrollable-virtual="true"
                :pageable-numeric="false"
                :pageable-previous-next="false"
                :pageable-messages-display="'Showing {2} users'"
                :editable="'popup'"
                :toolbar="[{name: 'excel', text: 'Excel'}]"
                :excel-file-name="'Motadata_UserListing.xlsx'"
                :excel-filterable="true"
            >
                <kendo-grid-column :selectable="true" :width="35"></kendo-grid-column>
                <kendo-grid-column :field="'UserId'" :hidden="true"
                                   :width="180"></kendo-grid-column>
                <kendo-grid-column :field="'UserName'"
                                   :template="this.toggleTemplate()"
                                   :width="180"></kendo-grid-column>
                <kendo-grid-column :field="'Role'"
                                   :width="140"></kendo-grid-column>
                <kendo-grid-column :field="'AssignedGroups'"
                                   :width="180" ></kendo-grid-column>
                <kendo-grid-column :field="'Email'"
                                   :width="220" ></kendo-grid-column>
                <kendo-grid-column :field="'Description'"
                                   :width="220" ></kendo-grid-column>

                <kendo-grid-column :text="'Actions'"
                                   :command="[{name: 'Edit', text:'Edit' ,click: editButtonClick},{name: 'Delete',text:'Delete', click: deleteButtonClick}]"
                                   :title="'Actions'"
                                   :width="150"></kendo-grid-column>
            </kendo-grid>
        </div>

    </div>

</template>

<script>

    import JsZip from 'jszip';
    window.JSZip = JsZip;
    export default {
        props: ['users','tempUserInfo'],
        data () {
            return {
                searchUserText:'',
                username:'',
                userCount:0
            }
        },
        computed:{
            filteredUsers(){

                var searchText = this.searchUserText;
                if(searchText != "" && searchText !=undefined) {

                    return this.userGridFilter(searchText, this.users)
                }
                return this.users;
            }
        },
        mounted() {
              var inputs ,index;
              inputs = document.getElementsByClassName('user-status').length;
              for (index = 0; index < inputs; ++index) {
                    document.getElementsByClassName('user-status')[index].onclick = this.checkboxToggle
              }
        },
        methods:{
            userEditSidebarEditButtonClick:function(ev){
                ev.preventDefault();
                this.$parent.isEdit = true
                this.$parent.saveOredit = true
            },
            userEditSidebarSaveButtonClick: function(ev) {

                ev.preventDefault();
                this.$parent.isEdit = false
                this.$parent.saveOredit = false

                var data = [{
                    userid: this.$parent.userid,
                    firstName : this.$parent.firstname,
                    lastName : this.$parent.lastname,
                    userName : this.$parent.usernm,
                    role:this.$parent.userrole,
                    email:this.$parent.email,
                    status:this.$parent.isuserenable,
                    assingedGroup:this.$parent.assignedgroups,
                    description:this.$parent.description

                }]
                this.$store.dispatch('admin/editUser', data)

                this.$refs.localDataSource.kendoDataSource.data(this.$store.getters['admin/users'])
                alert("Data Save Successfully")
                //TODO Send the above data in backend side for save
            },
            userEditSidebarDeleteButtonClick:function(ev){
                ev.preventDefault();
                alert("Delete User")
            },
            userEditSidebarCloseButtonClick:function(ev){
                ev.preventDefault();
                this.$parent.isEditButtonClick = true
            },
            deleteButtonClick:function(ev){
                ev.preventDefault();
                var tr = ev.target.parentElement.parentElement;
                this.$store.dispatch('admin/deleteUser', parseInt(tr.cells[1].firstChild.textContent))
            },
            editButtonClick: function(ev){

                ev.preventDefault();
                this.$parent.isEditButtonClick = false
                this.$parent.hideSidebar = true
                this.$parent.isEdit = false
                this.$parent.saveOredit = false
                var tr = ev.target.parentElement.parentElement;

                this.userid = tr.cells[1].firstChild.textContent

                var editUser = this.$store.getters['admin/getUserByUserName'](this.userid)
                this.setEditUserData(editUser)

                document.querySelector("a[aria-label = 'Edit']").onclick = this.userEditSidebarEditButtonClick
                document.querySelector("a[aria-label = 'Delete']").onclick = this.userEditSidebarDeleteButtonClick
                document.querySelector("a[aria-label = 'Close']").onclick = this.userEditSidebarCloseButtonClick
                document.querySelector("a[aria-label = 'Save']").onclick = this.userEditSidebarSaveButtonClick

            },
            setEditUserData(editUser){

                this.$parent.userid = editUser.UserId
                this.$parent.firstname = editUser.UserName
                this.$parent.lastname = editUser.UserName
                this.$parent.usernm = editUser.UserName
                this.$parent.userrole = editUser.Role
                this.$parent.description = editUser.Description
                this.$parent.assignedgroups = editUser.AssignedGroups
                this.$parent.isuserenable = editUser.Status
                this.$parent.email = editUser.Email
            },
            toggleTemplate(){
                let template =
                    `<label class="switch" >
                        <input type="checkbox" class="user-status"  # if(Status){ # checked # } # />
                        <span class="slider round"></span>
                        <span class="grid-user">\#: UserName#\</span>
                    </label>`;
                let compiledTemplate = kendo.template(template);
                return compiledTemplate.bind(this);

            },
            checkboxToggle(){
                //TODO Grid checkbox template event binding not working
                alert("Checkbox Toggle !!!")
            },

            userGridFilter(searchText, users) {
                const searchCriteria = ['UserName', 'Role', 'AssignedGroups', 'Email', 'Description'];
                const searchTextLower = searchText.toLowerCase();
                return users.filter( user => {
                    return searchCriteria.some( field => {
                        return user[field].toLowerCase().indexOf(searchTextLower) > -1
                    });
                });
            }
        }
    }
</script>

<style type="text/css" >
    .k-grid-toolbar {
        text-align: right;
    }

    .grid-user{
        position: relative;
        left: 63px;
    }
    .search-box{
        box-shadow: 0 1px 4px 0 rgba(86,108,118,0.12);
        border: none;

    }
    .search-button{
        background-color: rgba(0,152,238,1);
    }
    .icon-search {
        height: 12px;
    }
    .switch {
        position: relative;
        display: inline-block;
        width: 51px;
        height: 27px;
    }

    .switch input {display:none;}

    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        -webkit-transition: .4s;
        transition: .4s;
    }

    .slider:before {
        position: absolute;
        content: "";
        height: 19px;
        width: 19px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        -webkit-transition: .4s;
        transition: .4s;
    }

    input:checked + .slider {
        background-color: #F4D03F;
    }

    input:focus + .slider {
        box-shadow: 0 0 1px #2196F3;
    }

    input:checked + .slider:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
    }

    /* Rounded sliders */
    .slider.round {
        border-radius: 34px;
    }

    .slider.round:before {
        border-radius: 50%;
    }
    .k-grid-header{
        font-weight: bold !important;
    }


</style>
