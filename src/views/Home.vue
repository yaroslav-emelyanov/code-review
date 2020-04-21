<template>
  <div class="home test">
    <div class="logo"></div>
    <Test/>
  </div>
</template>

<script>
import Test from '@/components/hoc/Test.vue';

export default {
  name: 'Home',
  components: {
    Test,
  },
};

</script>

<style lang="scss" scoped>

  .home {
     position: relative;

     height: 100%;
     width: 100%;

     padding-top: 5.5vh;

     overflow: hidden;

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
      height: auto;
      padding-top: 6%;
      background:  url('~@/assets/img/bg-mobile.png') center center/cover no-repeat;
      &.test {
        height: 100%;
      }
    }

    .logo {
      height: 45px;
      width: 82.5px;
    }
  }

  @media screen and (max-height: 667px) {
    .home {
      &.test {
        height: auto;
      }
    }
  }

  @media screen and (max-width: 768px) and (min-height: 980px) {
    .home {
      height: 100%;
      padding-top: 4vh;
    }
  }
</style>
