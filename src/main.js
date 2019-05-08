// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import App from './App'
import router from './router'
import VueJsonp from 'vue-jsonp'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Qs from 'qs'
import 'tui-editor/dist/tui-editor.css';
import 'tui-editor/dist/tui-editor-contents.css';
import 'highlight.js/styles/github.css';
import 'codemirror/lib/codemirror.css';
// import {Editor,Viewer} from "tui-editor"

Vue.use(BootstrapVue)
Vue.use(VueJsonp)
// Vue.prototype.axios = axios;
Vue.prototype.qs = Qs;
Vue.use(VueAxios,axios)
// Vue.use(Editor,Viewer)
Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
