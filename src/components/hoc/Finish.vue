<template>
  <div class="finish">
    <Border figure="circle" class="picture-wrapper">
      <div class="picture">
        <div class="image"
             :style="{backgroundImage:
             `url('${require(`@/assets/img/Test/finish/${finish.id}.png`)}')`}">
        </div>
        <Score class="info-desktop" :condition="finish.condition" :title="finish.title"/>
      </div>
    </Border>
    <Score class="info-mobile" :condition="finish.condition" :title="finish.title"/>
    <div v-html="finish.text" class="characteristic"></div>
    <div class="row">
      <Border figure="square" class="share">
        <button v-if="!social" @click="social = true" class="btn orange">Поделиться</button>
        <socialMedia v-else/>
      </Border>
      <Border figure="square" class="again">
        <button @click="beginTestAgain" class="btn">Пройти тест еще раз</button>
      </Border>
    </div>
  </div>
</template>

<script>
import Border from '@/components/wrappers/Border.vue';
import Score from '@/components/Score.vue';
import socialMedia from '@/components/socialMedia.vue';
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'Finish',
  data: () => ({
    social: false,
  }),
  methods: {
    ...mapMutations(['beginTestAgain']),
  },
  computed: {
    ...mapGetters(['finish']),
  },
  components: {
    Border, Score, socialMedia,
  },
};
</script>

<style lang="scss" scoped>
  .finish {
    position: absolute;
    left: 50%;
    top: 50%;
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

  .characteristic {
    margin-top: 43px;

    color: white;
    font-size: 28px;
    font-weight: bold;
    line-height: 36px;
    text-align: center;
  }

  .row {
    display: flex;
    justify-content: space-between;

    margin-top: 7vh;
  }

  .share {
    width: 47%;
    background-color: #FD7B23;
  }

  .again {
    width: 46%;
  }

  @media screen and (max-width: 1024px) {
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

    .characteristic {
      margin-top: 19px;

      font-size: 16px;
      line-height: 24px;
      font-weight: normal;
    }

    .row {
      flex-direction: column;
      max-width: 300px;
      margin: 6vh auto 4vh;
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

  @media screen and (min-width: 1200px) and (min-height: 768px) and (max-height: 899px) {
    .finish {
      top: 53vh;
      transform: translate(-50%, -50%) scale(0.8);
    }
  }

  @media screen and (max-width: 768px) and (min-height: 960px) and (max-height: 1079px) {
    .finish {
      left: 50%;
      top: 53vh;
      margin: 0;
      transform: translate(-50%, -50%) scale(1.1);
    }
  }

  @media screen and (min-width: 1200px) and (min-height: 520px) and (max-height: 768px) {
    .finish {
      top: 53vh;
      transform: translate(-50%, -50%) scale(0.6);
    }
  }
</style>
