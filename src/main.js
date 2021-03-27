import Vue from 'vue'
import App from './App.vue'
import router from './router'
import stroe from './store'
import animated from 'animate.css'
// 上传到线上使用
import './assets/css/main.css'
import less from 'less'

Vue.use(less)
Vue.use(animated)
Vue.config.productionTip = false

new Vue({
  stroe,
  router,
  render: h => h(App),
}).$mount('#app')
