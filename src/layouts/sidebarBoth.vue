<template>
    <div class="container-wrapper">
        <div class="header-wrapper">
            <slot name="header">
                Header Should come here.
            </slot>
        </div>
        <div class="left-panel-wrapper" :class="{ 'hidden': leftHidden }">
            <div class="left-handle" @click="hideLeft">
                <slot name="handle-icon"> > </slot>
            </div>
            <slot name="left-panel">
                <div class="no-content">Left Panel Component should come here.</div>
            </slot>
        </div>
        <div class="right-panel-wrapper" :class="{ 'hidden': rightHidden }">
            <div class="right-handle" @click="hideRight">
                <slot name="handle-icon">
                    < </slot>
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
        data: () => {
            return {
                leftHidden: false,
                rightHidden: false
            }
        },
        methods: {
            hideLeft() {
                this.leftHidden = !this.leftHidden;
            },
            hideRight() {
                this.rightHidden = !this.rightHidden;
            }
        }
    }
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
            background: #eee;
        }
        .footer-wrapper {
            @include full-width;
            @include component-wrapper;
            height: $footerHeight;
            background: #eee;
            z-index: 2
        }
        .content-wrapper {
            @include full-width;
            @include component-wrapper;
            min-height: calc(100vh - #{$headerHeight} - #{$footerHeight})
        }
        .left-panel-wrapper {
            @include side-panels;
            @include component-wrapper;
            left: 0px;
            &.hidden {
                left : -#{$panelWidth};
            }
        }
        .right-panel-wrapper {
            @include side-panels;
            @include component-wrapper;
            right: 0px;
            &.hidden {
                right: -#{$panelWidth};
            }
        }
        .left-handle {
            @include handle;
            right: -30px;
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
        }
        .right-handle {
            @include handle;
            left: -30px;
            border-top-left-radius: 5px;
            border-bottom-left-radius: 5px;
        }
        .no-content {
            height: 100px;
            position: relative;
            float: left;
            width: 100%;
            margin: 50px auto;
        }
    }
</style>