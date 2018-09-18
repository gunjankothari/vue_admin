<template>
  <main-layout>
    <template slot="header">
      <header-component></header-component>
    </template>
    <template slot="footer">
      <footer-component></footer-component>
    </template>
    <template slot="content">
        <router-view />
    </template>
  </main-layout>
</template>

<script>
  import MainLayout from '@/layouts/sidebarRight';
  import HeaderComponent from '@/common/components/header';
  import FooterComponent from '@/common/components/footer';

  export default {
    components: {
      'main-layout': MainLayout,
      'header-component': HeaderComponent,
      'footer-component': FooterComponent,
    }
  }
</script>

<style lang="less" scoped>
</style>
