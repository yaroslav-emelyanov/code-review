<template>
  <div id="app">
    <Home/>
  </div>
</template>

<script>
import Home from '@/views/Home.vue';

export default {
  components: {
    Home,
  },
};

</script>

<style>
  @import "~@/assets/fonts.css";
  @import '~normalize.css';

  * {
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    font-family: Circe;
  }

  h1, h2, h3, h4, p {
    margin: 0;
    padding: 0;
  }
  #app {height:100%;}
</style>
