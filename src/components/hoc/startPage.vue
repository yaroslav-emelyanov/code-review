<template>
  <div class="container">
    <Border figure="circle" class="image-wrapper">
      <div class="image"></div>
    </Border>
    <div class="content">
      <h2 class="title">Вы знаете, что такое швеллер и метизы. <span>А что такое</span> блошки
        <span>ишлеп-нога</span>?</h2>
      <h3 class="subtitle">Давайте проверим ваше знание настоящего строительного языка в тесте
        <a href="#">nlmk.shop</a></h3>
      <div class="text">
        <p>Вы попадете в десять ситуаций <span>на стройплощадке</span>. В каждой — фраза из языка
          строителей, которую вам <span>нужно разгадать</span>.
        </p>
        <p>В конце мы посчитаем правильные ответы <span>и покажем</span>, насколько хорошо вы
          разбираетесь <span>в оборотах</span> <span>прорабов и рабочих</span>.</p>
      </div>
      <h3 class="challenge">Вперед! Чур не гуглить!</h3>
      <Border figure="square" class="btn-wrapper">
        <button @click="testStart" class="btn">Пройти тест</button>
      </Border>
    </div>
  </div>
</template>

<script>
import Border from '@/components/wrappers/Border.vue';
import { mapMutations } from 'vuex';

export default {
  name: 'startPage',
  methods: {
    ...mapMutations(['testStart']),
  },
  components: {
    Border,
  },
};
</script>

<style lang="scss" scoped>

  .container {
    position: absolute;
    top: 53vh;
    left: 50%;
    transform: translate(-50%, -50%);

    display: flex;
    justify-content: space-between;

    width: 1320px;
    padding: 0 42px 0 62px;
  }

  .image-wrapper {
    width: 545px;
    height: 591px;
  }

  .image {
    width: 100%;
    height: 100%;
    background: url('~@/assets/img/startPage/picture.png') center center/cover no-repeat #ffffff;
  }

  .content {
    width: 46.5%;
    color: white;
  }

  .title {
    font-size: 42px;
    font-weight: bold;
    line-height: 44px;
  }

  .subtitle {
    margin-top: 6%;

    font-size: 28px;
    line-height: 34px;
    font-weight: 300;

    a {
      font-weight: bold;
      color: white;
      text-decoration: none;
      cursor: pointer;
    }
  }

  .text {
    margin-top: 7%;
    padding-right: 18px;

    font-size: 18px;
    line-height: 24px;
  }

  .challenge {
    font-size: 28px;
    line-height: 38px;
    margin-top: 12%;
  }

  .btn-wrapper {
    width: 91%;
    margin-top: 5.2%;
  }


  @media screen and (max-width: 1440px) {
    .container {
      transform: translate(-50%, -50%) scale(0.75);
    }
  }

  @media screen and (max-width: 1024px) {
    .container {
      flex-wrap: wrap;

      max-width: 375px;
      width: auto;

      margin: 9% auto 0;
      padding: 0 35px;

      position: relative;
      top: 0;
      left: 0;
      transform: translate(0, 0);
    }

    .image-wrapper {
      width: 100%;
      height: 300px;
    }

    .content {
      width: 100%;
      margin-top: 11%;
      text-align: center;
    }

    .title {
      font-size: 28px;
      line-height: 32px;

      span {
        white-space: nowrap;
      }
    }

    .subtitle {
      font-size: 20px;
      line-height: 26px;
    }

    .text {
      margin-top: 6%;
      padding-right: 0;

      font-size: 14px;
      line-height: 20px;
      span {
        white-space: nowrap;
      }
    }

    .challenge {
      font-size: 20px;
      line-height: 38px;
    }

    .btn-wrapper {
      width: 100%;
      margin-top: 2.2%;
      margin-bottom: 18%;
    }

    .btn {
      font-size: 16px;
      line-height: 58px;
    }
  }

  @media screen and (max-width: 375px) {
    .title {
      font-size: calc(100vw / 13.39);
      line-height: calc(100vw / 11.71);
    }

    .image-wrapper {
      width: 100%;
      height: 81vw;
    }
  }

  @media screen and (max-width: 768px) and (min-height: 980px) {
    .container {
      margin-top: 3vh;
    }
    .content {
      margin-top: 6%;
    }
    .title {
      line-height: 30px;
    }
    .challenge {
      margin-top: 3vh;
    }
  }
</style>
