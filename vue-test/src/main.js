// import './assets/main.css';
import './scss/styles.scss';

import 'bootstrap/scss/bootstrap.scss';
import 'bootstrap/dist/js/bootstrap.js';
import { BootstrapVueNext } from 'bootstrap-vue-next';
// import * as Components from './components/exports';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);
// Object.entries(Components).forEach(([name, component]) => app.component(name, component));
app.use(router);
app.use(BootstrapVueNext);
app.mount('#app');
