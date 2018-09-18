<template>
    <div class="container-wrapper">
        <div class="header-wrapper">
            <slot name="header">
                Header Should come here.
            </slot>
        </div>
        <div class="left-panel-wrapper" :class="{ 'hidden': leftHidden }">
            <div class="left-handle" @click="hideLeft">
                <slot name="handle-icon"> &gt; </slot>
            </div>
            <slot name="left-panel">
                <div class="no-content">Left Panel Component should come here.</div>
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
                leftHidden: false
            }
        },
        methods:{
            hideLeft(){
                this.leftHidden = !this.leftHidden;
            }
        }
    }
</script>

<style scoped lang="less">
    @import 'less/index';
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
            min-height: ~"calc(100vh - @{headerHeight} - @{footerHeight})";
        }
        .left-panel-wrapper {
            .side-panels;
            .component-wrapper;
            left: 0px;

            &.hidden{
                left:  -(@panelWidth);
            }
        }
        .left-handle{
            .handle;
            right: -30px;
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
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