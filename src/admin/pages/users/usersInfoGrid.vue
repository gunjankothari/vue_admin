<template>
<div>
    <b-container fluid class="container-main">
        <b-row>
            <b-col lg="3" md="12" sm="12">
                <b-input-group size="md" class="mb-3 search-box " >

                    <b-form-input placeholder="Search users..."></b-form-input>

                    <b-input-group-append>
                        <b-btn class="search-button" variant="primary" @click="userGridSearch()">
                            <icon class="icon-search" name="search" size="sm"></icon>
                        </b-btn>
                    </b-input-group-append>
                </b-input-group>
            </b-col>
        </b-row>
    </b-container>
    <div >
        <kendo-grid :data-source="users"
                    :height="600"
                    :resizable="true"
                    :sortable-allow-unsort="true"
                    :sortable-show-indexes="true"
                    :scrollable-virtual="true"
                    :pageable-numeric="false"
                    :pageable-previous-next="false"
                    :pageable-messages-display="'Showing {2} users'"
                    :editable="'popup'"

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
    import usersStore from '../users/users-store';

    export default {
        name: "usersInfoGrid",
        methods:{
            userGridSearch:function (ev) {

                var grid = $('#grid').data('kendoGrid');
                var columns = grid.columns;
            }
        },
        data () {
            return {
                userNameTemplate: '<label class="switch" ><input type="checkbox" name="UserName" id="UserName" # if(Status){ # checked # } #  @click="CheckboxClick()"/><span class="slider round"></span><span class="grid-user">\#: UserName#\</span></label>',
            }
        },
        computed: {
            users () {
                debugger;
                return new kendo.data.DataSource({
                    data: this.$store.state.usersStore.state.users
                })
            }
        }



    }
</script>

<style type="text/css">
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
