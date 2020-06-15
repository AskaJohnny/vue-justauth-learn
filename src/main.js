// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//import router from './router'
import router from './router/customerRouter.js' //导入 自定义的 不是vue-cli 帮我们生成的

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import axios from 'axios'
import Vueaxios from 'vue-axios'

Vue.use(Vueaxios, axios)


Vue.use(ElementUI)
Vue.config.productionTip = false



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,  //注册到根实例中
  components: { App },
  template: '<App/>'
})
