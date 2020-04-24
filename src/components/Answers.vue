<template>
  <div class="wrapper">
    <Border figure="square">
      <div class="answers">
        <div class="answer"
             v-for="answer of answers"
             :key="answer.text + answer.id"
             @click="showIntermediateResult(answer.id)"
        >{{ answer.text }}</div>
      </div>
    </Border>
  </div>
</template>

<script>
import Border from '@/components/wrappers/Border.vue';
import { mapMutations } from 'vuex';

export default {
  props: ['answers'],
  name: 'Answers',
  methods: {
    ...mapMutations(['showIntermediateResult']),
  },
  components: {
    Border,
  },
};
</script>

<style lang="scss" scoped>
  .wrapper {
    padding: 2% 85px 0 90px;
  }

  .answer {
    padding: 1.6vh 52px;

    font-size: 26px;
    font-weight: bold;

    border-bottom: 5px solid black;
    background-color: white;
    cursor: pointer;
    &:hover {
      background-color: #FD7B23;
    }
    &:last-child {
      border-bottom: none;
    }
  }

  @media screen and (max-width: 1024px) {
    .wrapper {
      max-width: 420px;
      padding: 3% 10px;
      margin: 0 auto;
    }

    .answer {
      padding: 2.6% 6%;

      font-size: 12px;
      line-height: 18px;
      border-width: 3px;
    }
  }
</style>
