<template>
  <div class="home">
    <div class="wrapper" :class="hocComponent === 'startPage' ? 'startPage' : null">
      <div class="group-logos">
        <div class="logo"></div>
        <a :href="link" class="site-logo" target="_blank"></a>
      </div>
      <div v-if="hocComponent !== 'startPage'" class="group-text">
        <div class="title" v-html="title"></div>
        <div class="subtitle" v-html="subtitle"></div>
      </div>
    </div>
    <component :is="hocComponent" :testName="title" :subtitle="subtitle"></component>
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
  data: () => ({
    link: 'https://nlmk.shop/',
    title: '&laquo;Шурик, рюмка и&nbsp;шлёп-нога&raquo;',
    subtitle: 'Тест на знание строительного&nbsp;языка',
  }),
  computed: {
    ...mapGetters(['hocComponent']),
  },
  watch: {
    hocComponent() {
      const container = document.querySelector('.home');
      container.scrollTop = 0;
    },
  },
  mounted() {
    const $body = document.querySelector('body');
    let scrollPosition = 0;

    scrollPosition = window.pageYOffset;
    $body.style.overflow = 'hidden';
    $body.style.position = 'fixed';
    $body.style.top = `-${scrollPosition}px`;
    $body.style.width = '100%';
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

     overflow-y: hidden;
     overflow-x: hidden;

     background:  url('~@/assets/img/bg.png') center center/cover no-repeat #137CC9;
  }

  .logo {
     height: 10vh;
     width: 180px;

     margin-right: 40px;

     background:  url('~@/assets/img/logo.svg') center center/contain no-repeat;
  }

  .site-logo {
    height: 11vh;
    width: 220px;

    background:  url('~@/assets/img/nlmk-shop.png') center center/contain no-repeat;
  }

  .wrapper {
    display: flex;
    justify-content: space-between;
    max-width: 1100px;
    margin: 0 auto;
  }

  .group-logos {
    display: flex;
    align-items: center;
  }

  .group-text {
    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 46%;

    color: white;
    .title {
      font-size: 28px;
      font-weight: bold;
      letter-spacing: 0.5px;
    }
    .subtitle {
      font-size: 28px;
      line-height: 34px;
      font-weight: 300;
      letter-spacing: 0.5px;
    }
  }

  @media screen and (max-width: 1024px) {
    .home {
      overflow-y: auto;
      padding-bottom: 50px;
    }
    .logo {
      height: 67.5px;
      width: 123.75px;
    }
  }

  @media screen and (max-width: 1440px) {
    .wrapper {
      &.startPage {
        justify-content: center;
      }
    }
  }

  @media screen and (max-width: 1024px) {
    .wrapper {
        flex-direction: column;
        align-items: center;
        .group-text {
          width: 100%;
          text-align: center;
          margin-top: 20px;
        }
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

  @media screen and (max-width: 520px) {
    .wrapper {
      .group-text {
        .title {
          font-size: 22px;
        }
        .subtitle {
          font-size: 20px;
          line-height: 24px;
          margin-top: 10px;
        }
      }
    }
  }

  @media screen and (max-width: 420px) {
    .wrapper {
      .group-text {
        .title {
          font-size: 20px;
        }
        .subtitle {
          font-size: 16px;
          line-height: 20px;
          margin-top: 10px;
        }
      }
      .group-logos {
        justify-content: center;
        .logo {
          margin-right: 8%;
        }
        .site-logo {
          height: 7vh;
          width: 160px;
        }
      }
    }
  }
</style>
