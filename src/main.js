import Vue from 'vue';
import SocialSharing from 'vue-social-sharing';
import App from './App.vue';
import store from './store';

Vue.config.productionTip = false;
Vue.use(SocialSharing);

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
