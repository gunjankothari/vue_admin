<template>
  <router-view/>
</template>

<script>
import '@progress/kendo-ui'
import '@progress/kendo-theme-default/dist/all.css'

export default {
    name: 'App'
}
</script>

<style lang="less">
@import 'less/index';

html, body{
  margin: 0;
  padding:0;
}
html{
  min-height: 100%;
  position: relative;
}
body{
  height: 100vh
}
#app {
  font-family: 'Lato', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
}
</style>
