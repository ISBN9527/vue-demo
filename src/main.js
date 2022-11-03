import 'ant-design-vue/dist/antd.css';
import * as Antd from 'ant-design-vue';

import { createApp } from 'vue';

import App from './App.vue';

const app = createApp(App);
app.use(Antd).mount('#app');
