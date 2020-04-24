<template>
  <div class="dialogue">
    <div class="container">
      <div class="face"
           :style="{backgroundImage:
           `url('${require(`@/assets/img/Test/question/${numberQuestion}.png`)}')`}">
      </div>
    </div>
    <div class="text">
      <div class="cloud">{{ cloud }}</div>
      <div class="question">{{ question }}</div>
    </div>
  </div>
</template>

<script>

export default {
  props: ['cloud', 'question', 'numberQuestion'],
  name: 'Dialogue',
};
</script>

<style scoped>
  .dialogue {
    display: flex;
    padding: 0 85px 0 90px;
  }

  .container {
    position: relative;
    width: 30%;
    height: 245px;
    border: 5px solid black;
    background-color: white;
    z-index: 1;
  }

  .face {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 100%;
    height: 88%;
    transform: translate(-50%, -50%);


    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
  }

  .text {
    width: 70%;
  }

  .cloud {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 104%;
    height: 200px;
    transform: translate(-15px, 4px);

    padding: 0 12% 0 28.4%;

    font-size: 28px;
    font-weight: bold;
    line-height: 36px;

    background: url('~@/assets/img/Test/cloud-desktop.svg') center center/contain no-repeat;
  }


  .question {
    margin-top: 2%;
    margin-left: 13%;

    color: white;
    font-size: 28px;
    font-weight: normal;
    line-height: 41px;
  }

  @media screen and (max-width: 1024px) {
    .dialogue {
      flex-direction: column;
      padding: 6% 0 0;
    }

    .container {
      width: 125px;
      height: 125px;
      margin: 0 auto;
    }

    .text {
      width: 262px;
      margin: 0 auto;
    }

    .cloud {
      width: 110%;
      height: 113px;
      transform: translate(-20px, -5px);

      padding: 7% 12% 0 19%;

      font-size: 16px;
      line-height: 22px;

      background: url('~@/assets/img/Test/cloud-mobile.svg') center center/contain no-repeat;
    }

    .question {
      margin-left: 0;

      font-size: 14px;
      line-height: 26px;
      text-align: center;
    }
  }
</style>
