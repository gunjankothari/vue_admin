<template>
    <b-card>
        <template slot="header">
            <icon :name="data.icon" size="md" scale="1.5"></icon>
            <span class="title">{{ data.header }}</span>
        </template>
        <div class="card-items">
            <ul>
                <li v-for="(item, index) in data.items" :key="index"><router-link :to="{ path: item.link }" append>{{ item.label }}</router-link></li>
            </ul>
        </div>
    </b-card>
</template>

<script>
    export default {
        props:['data']
    }
</script>

<style lang="less" scoped>
    .card{
            min-height: 18rem;
            box-shadow: 0 6px 12px 0 rgba(86,108,118,0.05);
            border-color: rgba(228,237,242,1);

            .card-header{
                background-color: transparent;
                border-bottom: none;
                padding: 1.25rem 1.25rem 0.75rem;
                font-weight: bold;
                color: rgba(110,119,132,1);
                display: flex;
                
                .title{
                    margin-left: 1rem;
                }
            }
            .card-body{
                padding-top: 0;
            }
            .card-items{
                ul{
                    list-style: none;
                    padding-left: inherit;
                    margin-bottom: 0px;

                    li{
                        padding: 0.5rem 0;

                        a {
                            font-family: 'Lato', sans-serif;
                            color: #13688C;
                            font-size: 14px;
                            text-decoration: none;
                            letter-spacing: 0.3px;                            
                        }
                    }
                }
            }
        }
</style>