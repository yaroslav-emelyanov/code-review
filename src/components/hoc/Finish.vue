<template>
  <div class="finish">
    <Border figure="circle" class="picture-wrapper">
      <div class="picture">
        <div class="image"
             :style="{backgroundImage:`url('${require(`@/assets/img/Test/finish/1.png`)}')`}">
        </div>
        <div class="info-desktop">
          <div class="score">0–4 балла</div>
          <div v-html="result" class="result"></div>
        </div>
      </div>
    </Border>
    <div class="info-mobile">
      <div class="score">0–4 балла</div>
      <div v-html="result" class="result"></div>
    </div>
    <div v-html="characteristic" class="characteristic"></div>
    <div class="row">
      <Border figure="square" class="share">
        <button class="btn">Поделиться</button>
      </Border>
      <Border figure="square" class="again">
        <button class="btn">Пройти тест еще раз</button>
      </Border>
    </div>
  </div>
</template>

<script>
import Border from '@/components/wrappers/Border.vue';

export default {
  name: 'Finish',
  data: () => ({
    result: 'Новичок в&nbsp;строительном языке',
    characteristic: `Вероятно, вы пока далеки от&nbsp;стройплощадки, а метизы вам понятнее блошек.
    Чаще бывайте на объектах и&nbsp;практикуйтесь с носителями языка.`,
  }),
  components: {
    Border,
  },
};
</script>

<style lang="scss" scoped>
  .finish {
    position: absolute;
    left: 50%;
    top: 48%;
    transform: translate(-50%, -50%);

    width: 856px;

    margin: 5.5vh auto 0;
    padding: 0 20px;
  }

  .picture {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    height: 395px;

    background-color: white;

    .image {
      position: absolute;
      left: 4%;
      bottom: 0;

      width: 375px;
      height: 349px;

      background-size: contain;
      background-position: center center;
      background-repeat: no-repeat;
    }
  }

  .info-mobile {
    display: none;
  }

  .info-desktop {
    width: 357px;
  }

  .score {
    font-size: 24px;
    font-weight: bold;
    line-height: 35px;
  }
  .result {
    margin-top: 20px;

    font-size: 42px;
    font-weight: 800;
    line-height: 50px;
  }

  .characteristic {
    margin-top: 43px;

    font-size: 32px;
    font-weight: bold;
    line-height: 40px;
    text-align: center;
  }

  .row {
    display: flex;
    justify-content: space-between;

    margin-top: 7vh;
  }

  .share {
    width: 47%;
  }

  .again {
    width: 46%;
  }

  @media screen and (max-width: 980px) {
    .finish {
      position: relative;
      left: 0;
      top: 0;
      transform: translate(0, 0);

      width: auto;
      max-width: 375px;
      margin: 7.5vh auto 0;
      padding: 0 15px;
    }

    .picture-wrapper {
      max-width: 300px;

      margin:  0 auto;
    }

    .picture {
      height: 300px;

      .image {
        width: 100%;
        left: 1%;

        height: 84%;
      }
    }

    .info-desktop {
      display: none;
    }

    .info-mobile {
      display: block;

      margin-top: 31px;

      text-align: center;
    }

    .score {
      font-size: 14px;
      line-height: 21px;
    }
    .result {
      margin-top: 7px;
      padding: 0 20px;

      font-size: 28px;
      line-height: 32px;
    }

    .characteristic {
      margin-top: 19px;

      font-size: 18px;
      line-height: 28px;
    }

    .row {
      flex-direction: column;
      max-width: 300px;
      margin: 8vh auto 9vh;
    }

    .btn {
      font-size: 16px;
      line-height: 56px;
    }

    .share {
      width: 100%;
    }

    .again {
      width: 100%;
      margin-top: 20px;
    }
  }

  @media screen and (min-width: 980px) and (max-height: 1079px) and (min-height: 768px) {
    .finish {
      transform: translate(-50%, -50%) scale(0.9);
    }
  }

  @media screen and (min-width: 980px) and (max-height: 980px) and (min-height: 768px) {
    .finish {
      transform: translate(-50%, -50%) scale(0.7);
    }
  }
</style>
