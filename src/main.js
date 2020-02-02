import Vue from 'vue'
import App from './App.vue'
import 'minireset.css'
import 'font-awesome/scss/font-awesome.scss'
import './styles/common.scss'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
