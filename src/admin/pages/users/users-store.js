import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({

    state: {
        users: [
            {
                "UserName": "Rahul",
                "Role": "Admin",
                "AssignedGroups": "Sales",
                "Status": true,
                "Email": "rahul@motadata.com",
                "Description": "Rahul is a java developer"
            },
            {
                "UserName": "Meet",
                "Role": "Super Admin",
                "AssignedGroups": "Finance",
                "Status": false,
                "Email": "meet@motadata.com",
                "Description": "meet is a CA"
            },
            {
                "UserName": "Ravi",
                "Role": "Admin",
                "AssignedGroups": "Sales",
                "Status": true,
                "Email": "ravi@motadata.com",
                "Description": "Ravi is a java developer"
            },
            {
                "UserName": "Jay",
                "Role": "Super Admin",
                "AssignedGroups": "Finance",
                "Status": true,
                "Email": "jay@motadata.com",
                "Description": "Jay is a CA"
            },
            {
                "UserName": "Vivek",
                "Role": "Admin",
                "AssignedGroups": "Sales",
                "Status": true,
                "Email": "vivek@motadata.com",
                "Description": "Vivek is a java developer"
            },
            {
                "UserName": "Dharmesh",
                "Role": "Super Admin",
                "AssignedGroups": "Finance",
                "Status": true,
                "Email": "dhjarmesh@motadata.com",
                "Description": "Dharmesh is a CA"
            },
            {
                "UserName": "Ajay",
                "Role": "Admin",
                "AssignedGroups": "Sales",
                "Status": true,
                "Email": "ajay@motadata.com",
                "Description": "Ajay is a java developer"
            },
            {
                "UserName": "Jaydev",
                "Role": "Super Admin",
                "AssignedGroups": "Finance",
                "Status": true,
                "Email": "jaydev@motadata.com",
                "Description": "Jaydev is a CA"
            },
            {
                "UserName": "Krunal",
                "Role": "Admin",
                "AssignedGroups": "Sales",
                "Status": true,
                "Email": "krunal@motadata.com",
                "Description": "Krunal is a java developer"
            },
            {
                "UserName": "Hardik",
                "Role": "Super Admin",
                "AssignedGroups": "Finance",
                "Status": true,
                "Email": "hardik@motadata.com",
                "Description": "Hardik is a CA"
            },
            {
                "UserName": "Viru",
                "Role": "Admin",
                "AssignedGroups": "Sales",
                "Status": true,
                "Email": "viru@motadata.com",
                "Description": "Viru is a java developer"
            },
            {
                "UserName": "Ramesh",
                "Role": "Super Admin",
                "AssignedGroups": "Finance",
                "Status": true,
                "Email": "ramesh@motadata.com",
                "Description": "Ramesh is a CA"
            },
            {
                "UserName": "Hitesh",
                "Role": "Admin",
                "AssignedGroups": "Sales",
                "Status": true,
                "Email": "hitesh@motadata.com",
                "Description": "Hitesh is a java developer"
            },
            {
                "UserName": "Nirav",
                "Role": "Super Admin",
                "AssignedGroups": "Finance",
                "Status": true,
                "Email": "nirav@motadata.com",
                "Description": "Nirav is a CA"
            },
            {
                "UserName": "Rikin",
                "Role": "Admin",
                "AssignedGroups": "Sales",
                "Status": true,
                "Email": "rikin@motadata.com",
                "Description": "Rikin is a java developer"
            },
            {
                "UserName": "Vishal",
                "Role": "Super Admin",
                "AssignedGroups": "Finance",
                "Status": true,
                "Email": "vishal@motadata.com",
                "Description": "Vishal is a CA"
            },
            {
                "UserName": "Manoj",
                "Role": "Admin",
                "AssignedGroups": "Sales",
                "Status": true,
                "Email": "manoj@motadata.com",
                "Description": "Manoj is a java developer"
            },
            {
                "UserName": "Shakti",
                "Role": "Super Admin",
                "AssignedGroups": "Finance",
                "Status": true,
                "Email": "shakti@motadata.com",
                "Description": "Shakti is a CA"
            },
            {
                "UserName": "Pratik",
                "Role": "Admin",
                "AssignedGroups": "Sales",
                "Status": true,
                "Email": "pratik@motadata.com",
                "Description": "Pratik is a java developer"
            },
            {
                "UserName": "Dhruv",
                "Role": "Super Admin",
                "AssignedGroups": "Finance",
                "Status": true,
                "Email": "dhruv@motadata.com",
                "Description": "Dhruv is a CA"
            }
        ]
    },
    getters: {
        usersIds: state => {
            return state.users.map((item) => {
                return item.UserName
            })
        }
    },
    mutations: {

    },
    actions: {

    }
});

