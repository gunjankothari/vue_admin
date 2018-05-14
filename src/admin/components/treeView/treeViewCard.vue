<template>
    <b-card class="tree-branch">
        <template slot="header">
            <span class="tree-title">{{ this.data.length }} Groups</span>
            <span class="treeIcon"></span>
        </template>
        <div class="tree-items">
            <ul>
                <li :class="{ 'has-child': item.child.length }" v-for="(item,index) in data" :key="index" @click="itemClicked(item)">{{ item.label }}</li>
            </ul>
        </div>
    </b-card>
</template>

<script>
    export default {
        props: ['data', 'level'],
        components:{
            
        },
        methods:{
            itemClicked(i){
                this.$emit('itemClicked',{ 
                    'child':i.child, 
                    'level': this.level+1
                });
            }
        }
    }
</script>

<style lang="scss" scoped>
    .tree-branch{
        width: 300px;
        border: 1px solid #E4EDF2;
        box-shadow: 0 6px 12px 0 rgba(86,108,118,0.05);
        border-radius: 6px 0 6px 6px;
        float: left;
        min-width: 300px; 

        .card-header{
            background-color: transparent;

            .tree-title{
                font-size: 15px;
                color: #333F52;
                letter-spacing: 0.75px;
            }
        }

        .card-body{
            padding: 0px;
        }

        .tree-items ul {
            padding: 0px;
            list-style: none;
            margin: 0px;

            li{
                padding: 0.5rem 1rem;
                font-size: 13px;
                font-size: 13px;
                color: #13688C;
                line-height: 21px;
                border-bottom: 1px solid #E7E9EB;

                &.has-child:after {
                    content: '>';
                    float: right;
                }
            }
        }
    }
</style>