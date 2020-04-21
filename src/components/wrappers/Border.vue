<template>
<div class="border">
  <slot/>
    <div v-for="(p, idx) of positions"
         :class="figure"
         :style="p"
         :key="idx"
    ></div>
</div>
</template>

<script>
export default {
  props: ['figure'],
  name: 'Border',
  data: () => ({
    positions: [
      { top: 0, left: 0, transform: 'translate(-50%, -50%)' },
      { bottom: 0, left: 0, transform: 'translate(-50%, 50%)' },
      { top: 0, right: 0, transform: 'translate(50%, -50%)' },
      { bottom: 0, right: 0, transform: 'translate(50%, 50%)' },
    ],
  }),
};
</script>

<style lang="scss" scoped>
  @mixin figure {
    position: absolute;
    width: 24px;
    height: 24px;
    border: 4px solid black;
    background-color: white;
    transform: translate(-50%, -50%);
  }

  .border {
    position: relative;
    border: 5px solid black;
    .circle {
      @include figure;
      border-radius: 50%;
    }
    .square {
      @include figure;
    }
  }

  @media screen and (max-width: 768px) {
    @mixin figure {
      width: 12px;
      height: 12px;
      border-width: 2px;
    }

    .border {
      border-width: 3px;
      .circle {
        @include figure;
      }
      .square {
        @include figure;
      }
    }
  }
</style>
