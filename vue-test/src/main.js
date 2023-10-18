// import './assets/main.css';
import './scss/styles.scss';

import 'bootstrap/scss/bootstrap.scss';
import 'bootstrap/dist/js/bootstrap.js';
import { BootstrapVueNext } from 'bootstrap-vue-next';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);
app.use(router);
app.use(BootstrapVueNext);
app.mount('#app');
