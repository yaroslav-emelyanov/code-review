<template>
  <div class="home">
    <div class="logo"></div>
    <component :is="hocComponent"></component>
  </div>
</template>

<script>
import startPage from '@/components/hoc/startPage.vue';
import Test from '@/components/hoc/Test.vue';
import Result from '@/components/hoc/Result.vue';
import Finish from '@/components/hoc/Finish.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'Home',
  computed: {
    ...mapGetters(['hocComponent']),
  },
  components: {
    startPage, Test, Result, Finish,
  },
};

</script>

<style lang="scss" scoped>

  .home {
     position: relative;

     height: 100%;
     width: 100%;

     padding-top: 5.5vh;

     overflow: auto;

     background:  url('~@/assets/img/bg.png') center center/cover no-repeat #137CC9;
  }

  .logo {
     height: 90px;
     width: 165px;

     margin: 0 auto;

     background:  url('~@/assets/img/logo.svg') center center/contain no-repeat;
  }

  @media screen and (max-width: 1024px) {
    .logo {
      height: 67.5px;
      width: 123.75px;
    }
  }

  @media screen and (max-width: 768px) {
    .home {
      padding-top: 6%;
      background:  url('~@/assets/img/bg-mobile.png') center center/cover no-repeat;
    }

    .logo {
      height: 45px;
      width: 82.5px;
    }
  }
</style>
