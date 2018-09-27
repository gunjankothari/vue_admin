<template>
    <div>
        <b-container fluid class="container-main">
            <b-row>
                <b-col lg="2" md="9" sm="9" class="col-xs-12 col-sm-6 col-md-3 example-col">
                    <b-input-group size="md" class="mb-3 search-box " >
                        <b-form-input id="search-textbox" placeholder="Search users..." v-model="searchUserText" @keyup.native="userGridSearch()"></b-form-input>
                    </b-input-group>
                </b-col>
            </b-row>
        </b-container>
        <div id="vueapp" class="vue-app" >
            <kendo-grid
                :height="500"
                :data-source="users"
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
                <kendo-grid-column :field="'UserName'"
                                   :template="userNameTemplate"
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
                                   :command="['edit', 'destroy']"
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
        data () {
            return {
                tempStore : this.$store.state.usersStore.state.users,
                searchUserText:'',
                userNameTemplate: '<label class="switch" ><input type="checkbox"   @click="checkboxToggle()" # if(Status){ # checked # } # /><span class="slider round"></span><span class="grid-user">\#: UserName#\</span></label>',
            }
        },
        computed: {
            users () {
                return new kendo.data.DataSource({
                    data: this.$store.state.usersStore.state.users
                })
            }
        },
        methods:{
            userGridSearch:function () {

                var searchText = this.searchUserText;

                if(searchText != "" && searchText !=undefined) {
                    this.$store.state.usersStore.state.users = this.userGridFilter(searchText)
                }
                else{
                    this.$store.state.usersStore.state.users = this.tempStore
                }
            },
            checkboxToggle : function(dataItem)
            {
                //TODO Grid checkbox template event binding not working
              alert("Rahul")
            },
            userGridFilter:function (searchText) {

                var newArray=[];
                var users = this.tempStore.map( user => {

                    var flag = false;

                    if(user.UserName.toLowerCase().indexOf(searchText.toLowerCase())>-1){
                        flag = true;
                    }
                    else if(user.Role.toLowerCase().indexOf(searchText.toLowerCase())>-1){
                        flag = true;
                    }
                    else if(user.AssignedGroups.toLowerCase().indexOf(searchText.toLowerCase())>-1){
                        flag = true;
                    }
                    else if(user.Email.toLowerCase().indexOf(searchText.toLowerCase())>-1){
                        flag = true;
                    }
                    else if(user.Description.toLowerCase().indexOf(searchText.toLowerCase())>-1){
                        flag = true;
                    }
                    else {
                        flag = false;
                    }
                    if(flag){
                        newArray.push(user);
                    }
                });
                return newArray;
            }
        }
    }

</script>

<style lang="less" scoped>

</style>
