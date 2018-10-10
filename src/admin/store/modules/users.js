import axios from 'axios';

export default {
    state: {
        users: [],
        loading: false
    },
    mutations:{
        isLoading(state, payload){
            state.loading = payload
        },
        setUsers(state, payload){
            state.users = payload
        } 
    },
    actions:{
        fetchUsers(context, config){
            context.commit('isLoading', true)
            //http://myjson.com/qy6ho
            return axios.get('https://api.myjson.com/bins/qy6ho') 
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
        }
    },
    getters: {
        users: state => state.users
    },
}