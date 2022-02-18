import { createApp } from 'vue';
import App from './App.vue';
import './styles/main.scss';
import { store } from '@/store/store';
import smoothscroll from 'smoothscroll-polyfill';
import 'smoothscroll-anchor-polyfill';

const app = createApp(App);
app.use(store);
app.mount('#app');
smoothscroll.polyfill();
