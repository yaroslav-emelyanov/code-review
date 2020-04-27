<template>
  <div class="intermediate-result">
    <div class="picture">
      <div class="face"
           :style="{backgroundImage:
           `url('${require(`@/assets/img/Test/intermediate/${numberCurrentQuestion}.png`)}')`}">
      </div>
      <div class="answer" v-html="answer"></div>
    </div>
    <Border figure="square" class="btn-wrapper">
      <button @click="nextQuestion" class="btn">
        {{ numberCurrentQuestion === amountQuestions ? 'Результат теста' : 'Следующий вопрос' }}
      </button>
    </Border>
    <div class="amount-questions">{{ numberCurrentQuestion }} из {{ amountQuestions }}</div>
  </div>
</template>

<script>
import Border from '@/components/wrappers/Border.vue';
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'intermediateResult',
  methods: {
    ...mapMutations(['nextQuestion']),
  },
  computed: {
    ...mapGetters(['currentQuestion', 'numberCurrentQuestion', 'amountQuestions', 'answer']),
  },
  components: {
    Border,
  },
};
</script>

<style lang="scss" scoped>
  .intermediate-result {
    position: absolute;
    left: 50%;
    top: 59.7vh;

    width: 555px;
    transform: translate(-50%, -50%);

    padding: 0 20px;
  }

  .picture {
    height: 590px;
    border: 5px solid black;
    background-color: white;
  }

  .face {
    width: 100%;
    height: 300px;

    margin: 27px auto;

    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }

  .answer {
    padding: 0 10%;
    margin-top: 42px;

    font-size: 26px;
    line-height: 34px;
    font-weight: bold;
  }

  .result {
    font-size: 42px;
    font-weight: 800;
    line-height: 62px;
    text-align: center;
  }

  .correct-answer {
    margin-top: 24px;
    padding: 0 40px;

    font-size: 28px;
    font-weight: bold;
    line-height: 36px;
    text-align: center;
  }

  .btn-wrapper {
    margin-top: 66px;
  }

  .amount-questions {
    margin-top: 9.5%;
  }

  @media screen and (max-width: 1024px) {
     .intermediate-result {
       position: relative;
       left: 0;
       top: 0;
       transform: translate(0, 0);

       width: auto;
       max-width: 375px;
       margin: 14vh auto 0;
       padding: 0 34px;
     }

     .picture {
       height: 336px;
     }

     .face {
       width: 134px;
       height: 170px;

       margin: 27px auto 14px;
     }

      .answer {
        margin-top: 30px;

        font-size: 14px;
        line-height: 19px;
        text-align: center;
      }

     .result {
       font-size: 24px;
       line-height: 35px;
     }

     .correct-answer {
       margin-top: 13px;
       padding: 0 32px;

       font-size: 16px;
       line-height: 21px;
     }

     .btn-wrapper {
       margin-top: 33px;
       .btn {
         font-size: 16px;
         line-height: 57px;
       }
     }

    .amount-questions {
      margin-top: 8.5%;
      margin-bottom: 5%;
    }
  }


  @media screen and (max-width: 375px) {
     .face {
       height: 46vw;
       margin: 3vh auto;
     }

     .correct-answer {
       padding: 0 10%;
       margin-bottom: 3vh;
     }
  }


  @media screen and (min-width: 980px) and (max-height: 1079px) and (min-height: 768px) {
    .intermediate-result {
      top: 59.7vh;
      left: 50%;
      margin: 0;
      transform: translate(-50%, -50%) scale(0.8);
    }
  }

  @media screen and (min-width: 1200px) and (max-height: 1024px) {
    .intermediate-result {
      top: 58vh;
      transform: translate(-50%, -50%) scale(0.8);
    }
  }

  @media screen and (max-width: 768px) and (min-height: 960px) and (max-height: 1079px) {
    .intermediate-result {
      left: 50%;
      top: 43%;
      margin: 0;
      transform: translate(-50%, -50%) scale(1.1);
    }
  }

  @media screen and (min-width: 980px) and (max-width: 1180px) and (min-height: 1080px) {
    .intermediate-result {
      left: 50%;
      top: 44%;
      margin: 0;
      transform: translate(-50%, -50%) scale(1.2);
    }
  }
</style>
