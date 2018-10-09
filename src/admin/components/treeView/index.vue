<template>
    <div class="tree-wrapper">
        <tree-view 
            :data="group" 
            :level="i" 
            v-for="(group,i) in groups" :key="i" 
            :levelTrack="levelTrack"
            @itemClicked="itemClicked($event)"
            :index="i"
        ></tree-view>
    </div>
</template>

<script>
import treeView from './treeViewCard';
    export default {
        data() {
            return {
                levelTrack: [0]
            }
        },
        props: ['data'],
        components:{
            treeView
        }, 
        methods:{
            itemClicked(params){
                this.levelTrack.splice(params.level-1,this.levelTrack.length-(params.level-1))
                this.levelTrack.push(params.index);

                this.groups.splice(params.level,this.groups.length-params.level);
                if(params.child.length){
                    this.groups.push(params.child);
                }
                
            }
        },
        computed:{
            groups(){
                return [this.data];
            }
        }
    }
</script>

<style scoped>
    .tree-wrapper{
        display: flex;
        align-items: flex-start;
        overflow-x: auto;
    }
</style>