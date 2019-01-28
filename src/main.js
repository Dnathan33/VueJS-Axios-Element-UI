import Vue from 'vue'
import App from './App.vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import VueAxios from 'vue-axios'
import locale from 'element-ui/lib/locale/lang/en'


Vue.use(VueAxios, axios)
Vue.use(Element, {locale})
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
