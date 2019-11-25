import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';

Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: h => h(App),
  /* components: {
    'Video': Video,
    'VideosList': VideosList,
    'Loading': Loading
  }, */
  router
}).$mount('#app')
