<template>
    <div class="footer">
        <div class="server-count">Server Running: {{ serverCount }}</div>
    </div>
</template>

<script>
    export default {
        data:()=>{
            return {
                serverCount: 10
            }
        }
    }
</script>

<style lang="less" scoped>
    .footer{
        background: #efefef;

        .server-count{
            float: right;
            position: relative;
            line-height: 30px;
        }
    }
</style>