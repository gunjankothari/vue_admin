<template>
    <div class="container-wrapper">
        <div class="header-wrapper">
            <slot name="header">
                Header Should come here.
            </slot>
        </div>
        <div class="content-wrapper">
            <slot name="content">
                Content Should come here.
            </slot>
        </div>
    </div>
</template>

<script>
    export default {}
</script>

<style scoped lang="less">
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
        .content-wrapper {
            .full-width;
            .component-wrapper;
            min-height: ~"calc(100vh - @{$headerHeight})";
        }
    }
</style>