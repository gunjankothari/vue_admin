<template>
    <div class="container-wrapper">
        <div class="header-wrapper">
            <slot name="header">
                Header Should come here.
            </slot>
        </div>
        <div class="right-panel-wrapper" :class="{ 'hidden': rightHidden }">
            <div class="right-handle" @click="hideRight">
                <slot name="handle-icon"> &lt; </slot>
            </div>
            <slot name="left-panel">
                <div class="no-content">Right Panel Component should come here.</div>
            </slot>
        </div>
        <div class="content-wrapper">
            <slot name="content">
                <span class="no-content">Content Should come here.</span>
            </slot>
        </div>
        <div class="footer-wrapper">
            <slot name="footer">
                Footer Should come here.
            </slot>
        </div>
    </div>
</template>

<script>
    export default {
        data:()=>{
            return {
                rightHidden: false
            }
        },
        methods:{
            hideRight(){
                this.rightHidden = !this.rightHidden;
            }
        }
    }
</script>

<style scoped lang="less" scoped>
    @import './scss/index';
    
    .container-wrapper {
        margin: 0;
        padding: 0;
        min-height: 100vh;

        .header-wrapper {
            .full-width;
            .component-wrapper;
            height: @headerHeight;
            background: #eee;
        }
        .footer-wrapper {
            .full-width;
            .component-wrapper;
            height: @footerHeight;
            background: #eee;
            z-index: 2
        }
        .content-wrapper {
            .full-width;
            .component-wrapper;
            min-height: ~"calc(100vh - @{$headerHeight} - @{$footerHeight})";
        }
        .right-panel-wrapper {
            .side-panels;
            .component-wrapper;
            right: 0px;

            &.hidden{
                right: -~"@{$panelWidth}";
            }
        }
        .right-handle{
            .handle;
            left: -30px;
            border-top-left-radius: 5px;
            border-bottom-left-radius: 5px;
        }
        .no-content{
            height: 100px;
            position: relative;
            float: left;
            width: 100%;
            margin: 50px auto;
        }
    }
</style>