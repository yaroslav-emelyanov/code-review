<template>
  <div class="social-media">
  <social-sharing :url="url"
                  title="Докажи, что ты настоящий строитель — пройди тест от nlmk.shop"
                  inline-template>
    <div>
      <network network="vk" class="vk-share"></network>
      <network network="facebook" class="fb-share"></network>
    </div>
  </social-sharing>
    <div v-for="social of socials"
         @click="changeSocial(social)"
         :class="social"
         :key="social"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'socialMedia',
  data: () => ({
    socials: ['vk', 'fb'],
    url: '',
  }),
  methods: {
    changeSocial(social) {
      const selector = `.${social}-share`;
      const link = document.querySelector(selector);
      this.createLink(social);
      setTimeout(() => {
        link.click();
      });
    },
    createLink(social) {
      const level = this.$store.getters.finish.id;
      this.url = `${window.location.origin}/index.php?level=${level}&social=${social}`;
    },
  },
};
</script>

<style lang="scss">
   .social-media {
     width: 100%;
     height: 100%;

     display: flex;
     justify-content: center;
     align-items: center;
   }

   .vk {
      width: 54px;
      height: 31px;
      background: url('~@/assets/img/socials/vk.svg') center center/contain no-repeat;
      margin-right: 15%;
      cursor: pointer;
       &:focus {
         outline: none;
       }
   }
   .fb {
     width: 28px;
     height: 55px;
     background: url('~@/assets/img/socials/fb.svg') center center/contain no-repeat;
     cursor: pointer;
     &:focus {
        outline: none;
     }
   }

  .hidden {
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
    z-index: -100;
  }

  @media screen and (max-width: 1024px) {
    .social-media {
      height: 56px;
    }

    .vk {
      height: 24px;
    }
    .fb {
      height: 38px;
    }
  }
</style>
