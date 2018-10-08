import navigationData from '../data/admin-data';

export default {
    state: {
        navigation: navigationData
    },
    getters: {
        cards: state => state.navigation
    }
}