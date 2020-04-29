<template>
  <div class="wrapper">
    <Border figure="square">
      <div class="answers" :class="{disabled}">
        <div class="answer" :class="{active: activeAnswer === answer.id}"
             v-for="answer of answers"
             :key="answer.text + answer.id"
             @click="changeAnswer(answer.id)"
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
  data: () => ({
    disabled: false,
    activeAnswer: null,
  }),
  methods: {
    ...mapMutations(['showIntermediateResult']),
    changeAnswer(id) {
      this.disabled = true;
      this.activeAnswer = id;
      const width = window.innerWidth;
      this.showIntermediateResult({ id, width });
    },
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

  .answers {
    &.disabled {
      pointer-events: none;
    }
  }

  .answer {
    display: flex;
    align-items: center;

    height: 82px;

    padding: 0 10% 0 6.5%;

    font-size: 26px;
    line-height: 30px;
    font-weight: bold;
    border-bottom: 5px solid black;
    background-color: white;
    cursor: pointer;
    &.active {
      background-color: #FD7B23;
    }
    &:last-child {
      border-bottom: none;
    }
  }

  @media screen and (min-width: 1025px) and (min-height: 1025px) {
    .answer {
      &:hover {
        background-color: #FD7B23;
      }
    }
  }

  @media screen and (max-width: 1024px) {
    .wrapper {
      max-width: 420px;
      padding: 3% 10px;
      margin: 0 auto;
    }

    .answer {
      padding: 0 6%;

      height: 39px;
      font-size: 12px;
      line-height: 14px;
      border-width: 3px;
    }
  }

  @media screen and (max-width: 360px) {
    .answer {
      height: 44px;
    }
  }
</style>
