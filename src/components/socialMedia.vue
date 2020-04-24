<template>
  <social-sharing url="https://vuejs.org/"
                  title="The Progressive JavaScript Framework"
                  quote="Vue is a progressive framework for building user interfaces."
                  hashtags="vuejs,javascript,framework"
                  twitter-user="vuejs"
                  inline-template>
    <div class="social-media">
      <network network="vk" class="vk"></network>
      <network network="facebook" class="fb"></network>
    </div>
  </social-sharing>
</template>

<script>
export default {
  name: 'socialMedia',
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
      background: url('~@/assets/img/socials/vk.svg');
      margin-right: 15%;
      cursor: pointer;
       &:focus {
         outline: none;
       }
   }
   .fb {
     width: 28px;
     height: 55px;
     background: url('~@/assets/img/socials/fb.svg');
     cursor: pointer;
     &:focus {
        outline: none;
     }
   }
</style>
