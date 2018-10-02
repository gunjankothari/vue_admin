<template>
<div id="userWindow">

    <kendo-window ref="windowRef"
                  :modal="false"
                  :resizable="false"
                  :pinned="false"
                  :position-top="50"
                  :position-left="1190"
                  :actions="actions"
                  :width="'500px'"
                  :height="'660px'"
                  :title="'Window title'"
                  style="display:none"
    >
        <b-container fluid class="container-main">
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
                    <label><b>{{username}}</b></label>


                </b-col>
                <b-col lg="3" md="12" sm="12" >
                    <label><b>{{username}}</b></label>
                </b-col>
            </b-row><br>
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
                    <label><b>{{username}}</b></label>
                </b-col>
                <b-col lg="3" md="12" sm="12" >
                    <label><b>{{email}}</b></label>
                </b-col>
            </b-row><br>
            <b-row>
                <b-col lg="3" md="12" sm="12" >
                    <label>Password</label>
                </b-col>
            </b-row>
            <b-row>
                <b-col lg="6" md="12" sm="12" >
                    <label><a href="#">Click here to change </a></label>
                </b-col>
            </b-row><br>
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
            </b-row><br>
            <b-row>
                <b-col lg="6" md="12" sm="12" >
                    <label>Assigned Groups</label>
                </b-col>
            </b-row>
            <b-row>
                <b-col lg="6" md="12" sm="12" >
                    <label><b>{{assignedgroups}}</b></label>
                </b-col>
            </b-row><br>
            <b-row>
                <b-col lg="6" md="12" sm="12" >
                    <label>Role</label>
                </b-col>
            </b-row>
            <b-row>
                <b-col lg="6" md="12" sm="12" >
                    <input type="text" v-model="role"/>
                    <label><b>{{role}}</b></label>
                </b-col>
            </b-row><br>
            <b-row>
                <b-col lg="6" md="12" sm="12" >
                    <label>Description</label>
                </b-col>
            </b-row>
            <b-row>
                <b-col lg="6" md="12" sm="12" >
                    <label><b>{{description}}</b></label>
                </b-col>
            </b-row>

        </b-container>
    </kendo-window>
</div>
</template>

<script>
    export default {
        props: ['username','role','assignedgroups','email','description','isuserenable'],
        data () {
            return {
                actions: ['Edit','Delete','Minimize','Maximize','Close']

             }
        },
        computed: {
                isuserEnable: function(){
                    return this.isuserenable
                }
        },
        updated(){
            debugger;
           // this.userstatus = this.userenable
            document.getElementsByClassName('k-button k-bare k-button-icon k-window-action')[0].onclick = this.userWindowEditButtonClick
            document.getElementsByClassName('k-button k-bare k-button-icon k-window-action')[1].onclick = this.userWindowDeleteButtonClick
        },

        methods:{
            userWindowEditButtonClick:function(){
              alert("Edit User")
            },
            userWindowDeleteButtonClick:function(){
                alert("Delete User")
            },
            editUserCheckboxToggle(){
                //TODO Grid checkbox template event binding not working
               // alert("Checkbox Toggle !!!")
            }
        }
    }
</script>

<style scoped>

</style>
