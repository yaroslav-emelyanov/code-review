<template>
  <div class="container">
    <Border figure="circle" class="image-wrapper">
      <div class="image"></div>
    </Border>
    <div class="content">
      <div class="wrapper-inner">
        <h2 class="title" v-html="testName"></h2>
        <div class="subtitle" v-html="subtitle"></div>
        <div class="text">
          <p v-for="(t, id) of texts" v-html="t" :key="id"></p>
        </div>
        <h3 class="challenge">Вперед! Чур не гуглить!</h3>
      </div>
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
  props: ['testName', 'subtitle'],
  data: () => ({
    texts: [
      `Понимать язык строителей — это искусство. Каждый день
          принимая&nbsp;сотни заказов на металлопродукцию, мы овладели
          им&nbsp;в&nbsp;совершенстве. А хотите проверить себя?`,
      `Прямо сейчас пройдите через 10&nbsp;реальных&nbsp;ситуаций
          на&nbsp;стройплощадке, разгадайте смысл как можно большего
          количества терминов и в конце узнаете, насколько хорошо
          вы&nbsp;понимаете язык строителей.`,
    ],
  }),
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
    top: 50vh;
    left: 50%;
    transform: translate(-50%, -50%);

    display: flex;
    justify-content: space-between;

    width: 1200px;
    padding: 0 40px 0 55px;
  }

  .image-wrapper {
    width: 496px;
    height: 537px
  }

  .image {
    width: 100%;
    height: 100%;
    background: url('~@/assets/img/startPage/picture.png') center center/cover no-repeat #ffffff;
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 46.5%;
    color: white;
  }

  .title {
    font-size: 36px;
    font-weight: bold;
    letter-spacing: 0.5px;
    transform: translateX(-20px);
  }

  .subtitle {
    font-size: 28px;
    line-height: 34px;
    font-weight: 300;
    letter-spacing: 0.5px;
    a {
      font-weight: bold;
      color: white;
      text-decoration: none;
      cursor: pointer;
    }
  }

  .text {
    margin-top: 9%;
    padding-right: 18px;

    font-size: 22px;
    line-height: 24px;

    p {
      margin-bottom: 15px;
    }
  }

  .challenge {
    font-size: 28px;
    line-height: 38px;
    margin-top: 5%;
  }

  .btn-wrapper {
    width: 92%;
  }

  @media screen and (max-width: 1440px) {
    .container {
      transform: translate(-50%, -50%) scale(0.75);
    }
  }

  @media screen and (min-width: 1200px) and (min-height: 900px) and (max-height: 1079px) {
    .container {
      transform: translate(-50%, -50%) scale(0.8);
    }
  }

  @media screen and (min-width: 1200px) and (min-height: 768px) and (max-height: 899px) {
    .container {
      transform: translate(-50%, -50%) scale(0.7);
    }
  }

  @media screen and (min-width: 1200px) and (min-height: 520px) and (max-height: 768px) {
    .container {
      top: 53vh;
      transform: translate(-50%, -50%) scale(0.65);
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
      padding-right: 0;
      transform: translateX(0);
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
      p {
        padding: 0 5%;
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

  @media screen and (max-width: 360px) {
    .text {
      p {
        padding: 0;
      }
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
