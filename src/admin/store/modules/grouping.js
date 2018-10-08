import groupingData from "../data/grouping-data";

export default {
    state: {
        groupingData,
    },
    mutations: {
        addGroupingItem: (state, item) => {
            let arr = getGroup(state.groupingData, item.levels, item.addAtLevel);
            arr.push({
                label: item.label,
                child: []
            });
        }
    },
    getters: {
        group: state => state.groupingData,
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
