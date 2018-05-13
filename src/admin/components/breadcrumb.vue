<template>
    <ul class="breadcrumbs">
        <li v-for="(route, i) in currentRoute" :key="i" v-if="route.label">
            <router-link :to="{ path: route.link }" replace>{{ route.label }}</router-link>
        </li>
    </ul>
</template>

<script>

import ADMIN_DATA from '../data/admin-data';
    export default {
        computed:{
            currentRoute(){
                return this.$route.matched.map( route => { 
                    return{
                        'label': this.getRouteLabel(route),
                        'link': route.path 
                    }    
                })
            }
        },
        methods: {
            getRouteLabel(route){
                const routeLinks = route.path.split('/');
                const current_route_link = routeLinks[routeLinks.length -1];
                
                if(current_route_link === 'admin' || current_route_link === '')
                    return route.name;

                let current_route_item,
                    current_route_label;
                const current_route = ADMIN_DATA.find( object => {
                    current_route_item =  object.items.find( item => {
                        if(item.link === current_route_link){
                            current_route_label = item.label;
                            return true;
                        }
                        return false;
                    });
                    return current_route_item ? true : false;
                });

                return `${current_route.header} / ${current_route_label}`;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .breadcrumbs{
        list-style: none;
        display: flex;
        padding: 10px 0px 20px;

        li{
            display: inline;

            a{
                font-size: 14px;
                color: #13688C;
                letter-spacing: 0.29px;
                line-height: 24px;
                padding: 10px;
                text-decoration: none
            }

            &:not(:last-child){                
                &:after{
                    content: '>';
                }
            }

            &:last-child{
                a{
                    font-size: 24px;
                    color: #333F52;
                    letter-spacing: 0.49px;
                    line-height: 24px;
                    padding: 10px;
                }
            }
        }
    }
</style>