<template>
  <div class="intermediate-result">
    <div class="picture">
      <div class="face"
           :style="{backgroundImage: `url('${require(`@/assets/img/Test/intermediate/1.svg`)}')`}">
      </div>
      <div class="result">Верно!</div>
      <div v-html="text" class="correct-answer"></div>
    </div>
    <Border figure="square" class="btn-wrapper">
      <button class="btn">Следующий вопрос</button>
    </Border>
    <div class="amount-questions">1 из 10</div>
  </div>
</template>

<script>
import Border from '@/components/wrappers/Border.vue';

export default {
  name: 'intermediateResult',
  data: () => ({
    text: 'Блошки — это саморезы и&nbsp;шурупы небольшого размера',
  }),
  components: {
    Border,
  },
};
</script>

<style lang="scss" scoped>
  .intermediate-result {
    position: absolute;
    left: 50%;
    top: 58%;

    width: 555px;
    transform: translate(-50%, -50%);

    padding: 0 20px;
  }

  .picture {
    height: 554px;
    border: 5px solid black;
    background-color: white;
  }

  .face {
    width: 232px;
    height: 298px;

    margin: 27px auto;

    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
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
    margin-top: 15.5%;
  }

  @media screen and (max-width: 980px) {
     .intermediate-result {
       position: relative;
       left: 0;
       top: 0;
       transform: translate(0, 0);

       width: auto;
       max-width: 375px;
       margin: 14.5vh auto 0;
       padding: 0 34px;
     }

     .picture {
       height: 333px;
     }

     .face {
       width: 134px;
       height: 170px;

       margin: 27px auto 14px;
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

  @media screen and (min-width: 980px) and (max-height: 1079px) and (min-height: 768px) {
    .intermediate-result {
      top: 58%;
      transform: translate(-50%, -50%) scale(0.9);
    }
  }

  @media screen and (min-width: 980px) and (max-height: 980px) and (min-height: 768px) {
       .intermediate-result {
         top: 58%;
         transform: translate(-50%, -50%) scale(0.7);
       }
  }


  @media screen and (max-width: 375px) {
     .picture {
       height: auto;
     }

     .face {
       height: 46vw;
       margin: 3vh auto;
     }

     .correct-answer {
       padding: 0 10%;
       margin-bottom: 3vh;
     }
  }

</style>
