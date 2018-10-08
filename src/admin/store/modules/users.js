import usersData from "../data/users-data";

export default {
    state: {
        users: usersData
    },
    getters: {
        users: state => state.users
    },
}