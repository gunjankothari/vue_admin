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

<style scoped lang="scss">
    @import './scss/index';
    
    .container-wrapper {
        margin: 0;
        padding: 0;
        min-height: 100vh;

        .header-wrapper {
            @include full-width;
            @include component-wrapper;
            height: $headerHeight;
        }
        .footer-wrapper {
            @include full-width;
            @include component-wrapper;
            height: $footerHeight;
            background: #eee;
            z-index: 2;
        }
        .content-wrapper {
            @include full-width;
            @include component-wrapper;
            min-height: calc(100vh - #{$headerHeight} - #{$footerHeight})
        }
    }
</style>