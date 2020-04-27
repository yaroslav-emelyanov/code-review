<template>
  <div>
    <div class="score">{{ condition.min }}–{{ condition.max }}
      {{ condition.max > 4 ? 'баллов' : 'балла' }}</div>
    <div v-html="title" class="result"></div>
  </div>
</template>

<script>
export default {
  props: ['condition', 'title'],
  name: 'Score',
};
</script>

<style scoped>
  .score {
    font-size: 24px;
    font-weight: bold;
    line-height: 35px;
  }
  .result {
    margin-top: 20px;
    padding-right: 10%;

    font-size: 42px;
    font-weight: 800;
    line-height: 50px;
  }

  @media screen and (max-width: 1024px) {
    .score {
      color: white;
      font-size: 14px;
      line-height: 21px;
    }
    .result {
      margin-top: 7px;
      padding: 0 20px;

      color: white;
      font-size: 28px;
      line-height: 32px;
    }
  }

</style>
