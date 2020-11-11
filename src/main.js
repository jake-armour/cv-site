import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Amplify from 'aws-amplify';
import '@aws-amplify/ui-vue';
import aws_exports from './aws-exports';
import './quasar'
import VueSmoothScroll from 'vue2-smooth-scroll'
import VueFullPage from 'vue-fullpage.js'
import './assets/themes/theme.css'
import VueCodeHighlight from 'vue-code-highlight';
import Prism from 'prism-es6';
Vue.use(Prism)
Vue.use(VueCodeHighlight)
Vue.use(VueFullPage);
Vue.use(VueSmoothScroll, {
  duration: 500,
})
Amplify.configure(aws_exports);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
