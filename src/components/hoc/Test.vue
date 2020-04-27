<template>
  <div class="test">
    <h2  v-html="currentQuestion.action" class="action"
         :class="currentQuestion.id === 10 ? 'max' : null"></h2>
    <Dialogue
      :cloud="currentQuestion.cloud"
      :question="currentQuestion.question"
      :numberQuestion="numberCurrentQuestion"
    />
    <Answers :answers="answers"/>
    <div class="amount-questions">{{ numberCurrentQuestion }} из {{ amountQuestions }}</div>
  </div>
</template>

<script>
import Answers from '@/components/Answers.vue';
import Dialogue from '@/components/Dialogue.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'Test',
  computed: {
    ...mapGetters(['currentQuestion', 'numberCurrentQuestion', 'amountQuestions', 'answers']),
  },
  components: {
    Dialogue, Answers,
  },
};

</script>

<style lang="scss" scoped>
  .test {
    position: absolute;
    left: 50%;
    top: 59vh;
    width: 1000px;
    transform: translate(-50%, -50%);

    margin: 0 auto;
  }

  .action {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 190px;

    color: white;
    font-size: 42px;
    line-height: 44px;
    text-align: center;
    &.max {
      position: relative;
      width: 120%;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  @media screen and (max-width: 1024px) {
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
      padding: 0 10%;

      font-size: 22px;
      line-height: 24px;
    }
  }

  @media screen and (min-height: 900px) and (max-height: 1079px) {
    .test {
      transform: translate(-50%, -50%) scale(0.8);
    }
  }

  @media screen and (max-width: 768px) and (min-height: 960px) and (max-height: 1079px) {
    .test {
      left: 50%;
      top: 43%;
      transform: translate(-50%, -50%) scale(1.1);
    }
  }

  @media screen and (min-width: 980px) and (max-width: 1180px) and (min-height: 1080px) {
    .test {
      left: 50%;
      top: 43%;
      transform: translate(-50%, -50%) scale(1.2);
    }
  }

</style>
