<template>
    <div class="container-wrapper d-flex flex-column">
        <div class="header-wrapper">
            <slot name="header">
                Header Should come here.
            </slot>
        </div>
        <div class="content-wrapper flex-grow-1">
            <slot name="content">
                Content Should come here.
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
    export default {}
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
        }
        .footer-wrapper {
            .full-width;
            .component-wrapper;
            height: @footerHeight;
            background: #eee;
            z-index: 2;
        }
        .content-wrapper {
            .full-width;
            .component-wrapper;
            min-height: ~"calc(100vh - @{headerHeight} - @{footerHeight})";
        }
    }
</style>