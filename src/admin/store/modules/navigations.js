import axios from 'axios';

export default {
    state: {
        navigation: [],
            loading: false
    },
    mutations:{
        isLoading(state, payload) {
            state.loading = payload
        },
        setNavigations(state, payload){
            state.navigation = payload
        }
    },
    actions:{
        fetchNavigations(context, config) {
            context.commit('isLoading', true)
            //http://myjson.com/175658
            return axios.get('https://api.myjson.com/bins/175658')
                .then(res => {
                    const navigation = res.data
                    context.commit('setNavigations', navigation);
                    return navigation;
                })
                .catch(err => console.error(err))
                .finally(() => {
                    context.commit('isLoading', false)
                });
        }
    },
    getters: {
        cards: state => state.navigation
    }
}