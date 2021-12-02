import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import MyHeader from './components/MyHeader.vue'
import MyFooter from './components/MyFooter.vue'

// 1.6
axios.defaults.withCredentials=true
// 1.7
axios.defaults.baseURL="http://localhost:3000"

Vue.config.productionTip = false
// 1.8 註冊
Vue.prototype.axios = axios;


Vue.component("my-header",MyHeader);
Vue.component("my-footer",MyFooter);



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
