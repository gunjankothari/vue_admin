<template>
    <b-card class="tree-branch">
        <template slot="header">
            <span class="tree-title">{{ this.data.length }} Groups</span>
            <span class="tree-icon" @click="showAddNew()"><icon name="plus" size="sm" scale="0.7" ></icon></span>
        </template>
        <div class="tree-items">
            <ul>
                <li :class="{ 'has-child': item.child.length }" v-for="(item,index) in data" :key="index" @click="itemClicked(item)">{{ item.label }}</li>
                <li class="new-input-item" v-if="showNewInput">
                    <b-form-input id="newInput" class="new-input" placeholder="Enter new Department"></b-form-input>
                    <span class="action-item remove" @click="hideAddNew()"><icon name="times" size="sm" scale="0.7"></icon></span>
                    <span class="action-item add" @click="addNew()"><icon name="check" size="sm" scale="0.7" ></icon></span>
                </li>
            </ul>
        </div>
    </b-card>
</template>

<script>
    export default {
        props: ['data', 'level'],
        data() {
            return {
                showNewInput: false
            }
        },
        methods:{
            itemClicked(i){
                this.$emit('itemClicked',{ 
                    'child':i.child, 
                    'level': this.level+1
                });
            },
            showAddNew(){
                this.showNewInput = true;
                setTimeout(()=>{
                    document.getElementById('newInput').focus();
                })
            },
            hideAddNew(){
                this.showNewInput = false;
            },
            addNew(){
                this.data.push({ 'label':document.getElementById('newInput').value, child:[]});
                this.hideAddNew();
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

            .tree-icon{
                background: #E8F4FA;
                border-radius: 4px;
                float: right;
                color: #0098EE;
                padding: 0 7px;
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
                &.new-input-item{
                    overflow: hidden;
                    padding: 14px 24px 18px;

                    .new-input{
                        background: rgba(123,210,246,0.10);
                        border: 1px solid #0098EE;
                        box-shadow: 0 1px 3px 0 rgba(0,152,238,0.18);
                        border-radius: 2px;
                        font-size: 13px;
                        width: 73%;
                        float: left;
                    }
                    .action-item{
                        float: left;
                        padding: 4px 8px;
                        background: #E8F4FA;
                        margin-left: 8px;
                        border-radius: 15px;
                        height: 25px;
                        width: 25px;
                        position: relative;
                        margin-top: 5px;
                        text-align: center;
                        color: #0098EE;

                        &.remove{
                            padding: 4px 9px;
                            color:#A0ACBA;
                            background: #F6F7F8;
                        }
                    }
                }
                
            }
        }
    }
</style>