<template>
    <b-input-group size="md" class="mb-3 search-box">
        <b-form-input placeholder="Search..." v-model="searchText"></b-form-input>
        <b-input-group-append>
            <b-btn class="search-button" variant="primary" @click="search()">
                <icon class="icon-search" name="search" size="sm"></icon>
            </b-btn>
        </b-input-group-append>
    </b-input-group>
</template>

<script>
    export default {
        data() {
            return {
                searchText: this.value
            }
        },
        methods: {
            search(){
                this.$emit('onSearch',this.searchText);
            }
        }
    }
</script>

<style lang="less" scoped>
    .search-box{
        box-shadow: 0 1px 4px 0 rgba(86,108,118,0.12);
        border: none;

        input{
            border: none;
        }
    }
    .search-button{
        background-color: rgba(0,152,238,1);
    }
    .icon-search {
        height: 12px;
    }
</style>

