import axios from 'axios';

export default {
    state: {
        users: [],
        loading: false,
        leftSidebarUserList : [{
            path:'users',
            text :"System Users"
        },{
            path:'users',
            text :'LDAP Users'
        },{
            path:'users',
            text :'Radis Users'
        }]
    },
    mutations:{
        isLoading(state, payload){
            state.loading = payload
        },
        setUsers(state, payload){
            state.users = payload
        },
        EDIT_USER(state, editUser){
            state.users.forEach( user => {
                if(user.UserId == editUser[0].userid){
                    debugger
                    user.UserName = editUser[0].userName
                    user.Email = editUser[0].email
                    user.Role = editUser[0].role
                    user.Status = editUser[0].status
                    user.AssignedGroups = editUser[0].assingedGroup
                    user.Description = editUser[0].description
                }
            });
        },
        DELETE_USER(state, userid){

            let i =  state.users.map(user => user.UserId).indexOf(userid) // find index of your object
            state.users.splice(i, 1)
        }
    },
    actions:{
        fetchUsers(context, config){
            context.commit('isLoading', true)
            //http://myjson.com/qy6ho
            return axios.get('https://api.myjson.com/bins/luhu4')
                .then( res => {
                    const users = res.data
                    context.commit('setUsers', users);
                    return users;
                })
                .catch( err => {
                    return err;
                })
                // .finally(() => {
                //     context.commit('isLoading', false)
                // });
        },
        editUser({commit}, user){
            commit('EDIT_USER', user)
        },
        deleteUser({commit}, userid){
            commit('DELETE_USER', userid)
        }
    },
    getters: {
        users: state => state.users,
        usersList:state => state.leftSidebarUserList,
        getUserByUserName:(state) => (userid) =>{
            return state.users.find(user => user.UserId === parseInt(userid))
        }
    },
}
