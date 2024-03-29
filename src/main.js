import { createApp } from 'vue';
import App from './App.vue';
import './styles/main.scss';
import smoothscroll from 'smoothscroll-polyfill';
import 'smoothscroll-anchor-polyfill';
import { createPinia } from 'pinia/dist/pinia';

const app = createApp(App);
app.use(createPinia());
app.mount('#app');
smoothscroll.polyfill();
