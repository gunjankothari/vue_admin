<template>
    <b-container fluid class="container-main">
        <b-row>
            <b-col>
                <breadcrumb></breadcrumb>
            </b-col>
        </b-row>
        <b-row>
            <b-col lg="3" md="12" sm="12">
                <search-box @onSearch="searchHandler"></search-box>
            </b-col>
        </b-row>
        <b-row>
            <b-col lg="3" md="6" sm="12" class="mb-4" v-for="(card, key) in filteredData" :key="key">
                <admin-card :data="card"></admin-card>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import * as _ from 'lodash';
import { mapGetters } from 'vuex';

import searchBox from '../components/searchBox';
import adminCard from '../components/card';
import breadcrumb from '../components/breadcrumb';

    export default {
        data() {
            return {
                searchText: ''
            }
        },
        components: {
            searchBox,
            adminCard,
            breadcrumb
        },
        computed: {
            filteredData() {
                let cards = _.cloneDeep(this.cards);
                const search = this.searchText;
                if(!search){
                    return cards;
                }
                return cards.filter( card => {
                    card.items = card.items.filter( item => {
                        return item.label.toLowerCase().indexOf(search.toLowerCase()) >= 0
                    });
                    return card.items.length > 0;
                });
            },
            ...mapGetters({
                'cards':'cards'
            })
        },
        methods:{
            searchHandler(value){
                this.searchText = value;
            }
        }
    }
</script>

<style lang="less" scoped>
    .container-main {
        padding: 35px 80px;
        background: #fcfcfc;
    }
</style>
