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
            <kendo-datasource ref="localDataSource" :data="usersInfo">
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
                                   :command="[{name: 'Edit', click: editButtonClick},{name: 'Delete', click: deleteButtonClick}]"
                                   :title="'Actions'"
                                   :width="150"></kendo-grid-column>
            </kendo-grid>
        </div>
        <users-edit-window :username="username" ></users-edit-window>
    </div>

</template>

<script>
    import UsersEditWindow from './userEditWindow'

    import JsZip from 'jszip';
    window.JSZip = JsZip;
    export default {
        props: ['users','tempUserInfo'],
        components: {
            UsersEditWindow
        },
        data () {
            return {
                searchUserText:'',
                usersInfo : this.users,
                username:'',
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

            deleteButtonClick:function(ev){
                var tr = ev.target.parentElement.parentElement;

                alert("Deleting "+tr.cells[1].firstChild.innerText +" User")
            },
            editButtonClick: function(ev){

                var tr = ev.target.parentElement.parentElement;
                this.username = tr.cells[1].firstChild.innerText;
                var window = this.$children[3].$refs.windowRef.kendoWidget();
                window.setOptions({title: this.username})
                window.open();
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
            userGridSearch() {

                var searchText = this.searchUserText;
                if(searchText != "" && searchText !=undefined) {
                    this.usersInfo = this.userGridFilter(searchText)
                }
                else{
                    this.usersInfo = this.tempUserInfo
                }
            },
            checkboxToggle(){
                //TODO Grid checkbox template event binding not working
                alert("Checkbox Toggle !!!")
            },
            userGridFilter(searchText) {
                const searchCriteria = ['UserName', 'Role', 'AssignedGroups', 'Email', 'Description'];
                const searchTextLower = searchText.toLowerCase();
                return this.tempUserInfo.filter( user => {
                    return searchCriteria.some( field => {
                        return user[field].toLowerCase().indexOf(searchTextLower) > -1
                    });
                });
            }
        }
    }
</script>

<style lang="less" >
    .k-grid-toolbar {
        position: absolute;
        right: 20px;
        text-align: right;
        max-width: 81px;
        top: -59px;
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
