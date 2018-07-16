import groupingData from "./data/grouping-data";
import adminData from './data/admin-data';

export default {
    store: {
        groupingData,
        adminData
    },
    mutations: {
        ADD_GROUP_ITEM: (state, item) => {
            console.log(item.levels)
            let arr = getGroup(state.groupingData, item.levels, item.addAtLevel);
            arr.push({
                label: item.label,
                child: []
            });
        }
    },
    actions: {

    },
    getters: {
        cards: state => state.adminData,
        group: state => state.groupingData,
    },

}
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