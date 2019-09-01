import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import router from './router'
import request from '@/assets/request/api.js'
import requestUrl from '@/assets/request/requestUrl.js'
import store from './store'
Vue.prototype.request = request;
Vue.prototype.requestUrl = requestUrl.url;
Vue.config.productionTip = false;
Vue.use(request);
Vue.use(requestUrl);
Vue.use(iView);
new Vue({
  render: h => h(App),
  store,
  router,
  mounted () {
    // 触发renderAfterDocumentEvent
    document.dispatchEvent(new Event('render-event'))
  }
}).$mount('#app')
