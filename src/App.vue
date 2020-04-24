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

<style lang="scss">
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
  #app {
    height:100%;
  }

  .btn {
    width: 100%;
    font-size: 26px;
    font-weight: bold;
    line-height: 76px;
    border: none;
    background-color: white;
    transition: all 0.15s ease-in-out;
    cursor: pointer;
      &:hover {
         background-color: #FD7B23;
       }
    &.orange {
      background-color: #FD7B23;
    }
  }

  .amount-questions {
    color: white;
    font-size: 32px;
    line-height: 47px;
    text-align: center;
    margin-top: 3.5%;
    margin-bottom: 7%;
  }


  @media screen  and (max-width: 768px) {
    .amount-questions {
      margin-top: 0.5%;

      font-size: 16px;
      line-height: 24px;
    }
  }
</style>
