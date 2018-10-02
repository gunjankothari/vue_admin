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
                  :activate="onWindowOpen"
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
                    <div v-show='!isEdit'><label><b>{{firstname}}</b></label></div>
                    <div v-show='isEdit'><input type="text" v-model="firstname"/></div>
                </b-col>
                <b-col lg="6" md="12" sm="12" >
                    <div v-show='!isEdit'><label><b>{{lastname}}</b></label></div>
                    <div v-show='isEdit'><input type="text" v-model="lastname"/></div>

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

                    <div v-show='!isEdit'><label><b>{{usernm}}</b></label></div>
                    <div v-show='isEdit'><input type="text" v-model="usernm"/></div>
                </b-col>
                <b-col lg="3" md="12" sm="12" >
                    <div v-show='!isEdit'><label><b>{{email}}</b></label></div>
                    <div v-show='isEdit'><input type="text" v-model="email"/></div>
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

                    <div v-show='!isEdit'><label><b>{{assignedgroups}}</b></label></div>
                    <div v-show='isEdit'><input type="text" v-model="assignedgroups"/></div>
                </b-col>
            </b-row><br>
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
            </b-row><br>
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
    </kendo-window>
</div>
</template>

<script>
    export default {
        props: ['username'],
        data () {
            return {
                actions: ['Edit','Delete','Close'],
                isEdit:false,
                email:'',
                isuserenable:'',
                assignedgroups:'',
                description:'',
                userrole:'',
                firstname:'',
                lastname:'',
                usernm:''
             }
        },

       methods:{
            onWindowOpen:function(){

             //TODO Call API with user name or user id and recieved the following response
                const user = [{
                    username:'RahulPatel',
                    firstname:'Rahul',
                    lastname:'Patel',
                    role:'Admin',
                    assingedgropup:'Developer',
                    email:'rahul@gmail.com',
                    description:'Rahul is a java developer',
                    status:true
                }]

                this.setUserData(user)

                document.querySelector("a[aria-label = 'Edit']").onclick = this.userWindowEditButtonClick
                document.querySelector("a[aria-label = 'Delete']").onclick = this.userWindowDeleteButtonClick

            },
            setUserData:function(user){

                    this.email=user[0].email
                    this.isuserenable=user[0].status
                    this.assignedgroups=user[0].assingedgropup
                    this.description=user[0].description
                    this.userrole= user[0].role
                    this.firstname = user[0].firstname
                    this.lastname=user[0].lastname
                    this.usernm = user[0].username
            },
            userWindowEditButtonClick:function(ev){
                this.actions = ['Save','Delete','Close']
                this.isEdit = true
                var current = this;
                setTimeout(function() {
                    document.querySelector("a[aria-label = 'Save']").onclick = current.userWindowSaveButtonClick
                }, 1000);
            },
           userWindowSaveButtonClick: function() {
               this.actions = ['Edit','Delete','Close']
               this.isEdit = false
               var current = this
               setTimeout(function() {
                   document.querySelector("a[aria-label = 'Edit']").onclick = current.userWindowEditButtonClick
               }, 1000);

               var data = [{
                   firstName : this.firstname,
                   lastName : this.lastname,
                   userName : this.usernm,
                   role:this.userrole,
                   email:this.email,
                   status:this.status,
                   assingedGroup:this.assignedgroups,
                   description:this.description

               }]

               alert("Data Save Successfully")
               //TODO Send the above data in backend side for save
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
