import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'

Vue.use(ElementUI);

Vue.config.productionTip = false
Vue.prototype.axios = axios

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
