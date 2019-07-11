import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import router from './router'
Vue.config.productionTip = false
Vue.use(iView);
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
