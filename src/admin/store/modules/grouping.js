import axios from 'axios';

export default {
    state: {
        groups: [],
    },
    mutations: {
        isLoading(state, payload) {
            state.loading = payload
        },
        setGroups(state, payload) {
            state.groups = payload
        },
        addGroupingItem(state, item) {
            let arr = getGroup(state.groupingData, item.levels, item.addAtLevel);
            arr.push({
                label: item.label,
                child: []
            });
        }
    },
    actions:{
        fetchGroups(context, config) {
            context.commit('isLoading', true)
            //http://myjson.com/zeja4
            return axios.get('https://api.myjson.com/bins/zeja4')
                .then(res => {
                    const groups = res.data
                    context.commit('setGroups', groups);
                    return groups;
                })
                .catch(err => console.error(err))
                .finally(() => {
                    context.commit('isLoading', false)
                });
        }
    },
    getters: {
        groups: state => state.groups,
    },

};
const getGroup = (items, levels, addAtLevel) => {
    if (levels.length > 0 && addAtLevel > 0) {
        const child = items[levels[0]].child;
        levels.shift();
        addAtLevel--;
        return getGroup(child, levels, addAtLevel);
    } else {
        return items;
    }
}
