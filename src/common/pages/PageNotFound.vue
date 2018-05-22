<template>
  <main-layout>
    <template slot="header">
      <header-component></header-component>
    </template>
    <template slot="footer">
      <footer-component></footer-component>
    </template>
    <template slot="content">
      <div class="page-not-found">
        <icon class="thumbs-down" name="thumbs-down" :height="72" :width="72"></icon>
        <h1 class="danger">404</h1>
        <h4 class="link-back">{{ msg }}</h4>
        <div class="link-back">
        <router-link :to="{ path: '/admin' }" replace>Go Back</router-link>
        </div>
      </div>
    </template>
  </main-layout>
</template>

<script>
  import MainLayout from '@/layouts/noSidebar';
  import HeaderComponent from '@/common/components/header';
  import FooterComponent from '@/common/components/footer';

  export default {
    data () {
        return {
            msg: 'Page Not Found'
        }
    },
    components: {
      'main-layout': MainLayout,
      'header-component': HeaderComponent,
      'footer-component': FooterComponent,
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .page-not-found{
    margin-top: 100px; 
    text-align: center;
  }
  h4 {
    font-weight: normal;
    text-align: center !important;
    vertical-align: middle;
  }
  .danger{
    color: tomato;
  }
  .link-back {
    text-align: center;
    
    a{
      text-decoration: none;
    }
  }
  .thumbs-down{
    font-size: 72px; 
    color: tomato;
  }
</style>
