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
                searchUserText:''
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
            toggleTemplate(){
                let template = 
                    `<label class="switch" >
                        <input type="checkbox" @click="checkboxToggle" />
                        <span class="slider round"></span>
                        <span class="grid-user">\#: UserName#\</span>
                    </label>`;
                let compiledTemplate = kendo.template(template);
                return compiledTemplate.bind(this);
                
            },
            userGridSearch() {

                var searchText = this.searchUserText;

                if(searchText != "" && searchText !=undefined) {
                    this.$store.state.usersStore.state.users = this.userGridFilter(searchText)
                }
                else{
                    this.$store.state.usersStore.state.users = this.tempStore
                }
            },
            checkboxToggle(dataItem){
                //TODO Grid checkbox template event binding not working
              console.log("Checkbox Toggle !!!")
            },
            userGridFilter(searchText) {
                const searchCriteria = ['UserName', 'Role', 'AssignedGroups', 'Email', 'Description'];
                const searchTextLower = searchText.toLowerCase();
                return this.tempStore.filter( user => {
                    return searchCriteria.some( field => {
                        return user[field].toLowerCase().indexOf(searchTextLower) > -1
                    });
                });
            }
        }
    }

</script>

<style lang="less" scoped>

</style>
