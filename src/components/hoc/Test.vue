<template>
  <div class="test">
    <h2 class="action">К вам подходит работник и говорит:</h2>
    <Dialogue/>
    <Answers/>
    <div class="amount-questions">1 из 10</div>
  </div>
</template>

<script>
import Answers from '@/components/Answers.vue';
import Dialogue from '@/components/Dialogue.vue';

export default {
  name: 'Test',
  components: {
    Dialogue, Answers,
  },
};

</script>

<style lang="scss" scoped>
  .test {
    position: absolute;
    left: 50%;
    top: 57vh;
    width: 1000px;
    transform: translate(-50%, -50%);

    margin: 0 auto;
  }

  .action {
    height: 153px;

    padding: 0 25%;

    color: white;
    font-size: 42px;
    line-height: 44px;
    text-align: center;
  }

  .amount-questions {
    color: white;
    font-size: 32px;
    line-height: 47px;
    text-align: center;
    margin-top: 3.5%;
  }

  @media screen and (max-height: 1080px) {
    .test {
      transform: translate(-50%, -50%) scale(0.9);
    }
  }

  @media screen and (max-height: 960px), screen and (max-width: 960px) {
    .test {
      transform: translate(-50%, -50%) scale(0.8);
    }
  }

  @media screen and (max-width: 768px) {
    .test {
      position: relative;
      left: 0;
      top: 0;
      width: 100%;
      transform: translate(0, 0);

      padding-top: 6.8%;
    }

    .action {
      height: auto;
      padding: 0 20%;

      font-size: 22px;
      line-height: 24px;
    }

    .amount-questions {
      margin-top: 0.5%;
      margin-bottom: 7%;

      font-size: 16px;
      line-height: 24px;
    }
  }
</style>
