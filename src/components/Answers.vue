<template>
  <div class="wrapper">
    <Border figure="square">
      <div class="answers">
        <div class="answer">Найду ближайшую бездомную собаку и потрясу её.</div>
        <div class="answer">Рассмеюсь. Блошек, хах! Вот удумал, а.</div>
        <div class="answer">Подам ему пакет с мелкими шурупами и саморезами.</div>
        <div class="answer">Отойду от работника подальше.</div>
      </div>
    </Border>
  </div>
</template>

<script>
import Border from '@/components/wrappers/Border.vue';

export default {
  name: 'Answers',
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
    padding: 0 52px;

    font-size: 26px;
    font-weight: bold;
    line-height: 7.2vh;
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

  @media screen and (max-width: 768px) {
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
