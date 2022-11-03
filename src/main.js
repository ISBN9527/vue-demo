import Vue from 'vue';
import App from './App.vue';
import * as Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

Vue.use(Antd);
Vue.config.devtools = true;
new Vue({
  render: (h) => h(App),
}).$mount('#app');
