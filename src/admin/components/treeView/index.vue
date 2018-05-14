<template>
    <div class="tree-wrapper">
        <tree-view :data="group" :level="i" v-for="(group,i) in groups" :key="i" @itemClicked="itemClicked($event)"></tree-view>
    </div>
</template>

<script>
import treeView from './treeViewCard';
    export default {
        data() {
            return {
                groups: []
            }
        },
        props: ['data'],
        components:{
            treeView
        }, 
        methods:{
            itemClicked(params){
                console.log("Item Clicked", params );
                this.groups.splice(params.level,this.groups.length-params.level);
                if(params.child.length)
                    this.groups.push(params.child);
            }
        },
        created(){
            this.groups = [this.data];
        }
    }
</script>

<style scoped>
    .tree-wrapper{
        display: flex;
        align-items: flex-start;
        overflow-x: scroll;
    }
</style>