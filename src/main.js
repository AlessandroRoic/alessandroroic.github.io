import { createApp } from 'vue';
import App from './App.vue';
import './styles/main.scss';
import { store } from '@/store/store';
import * as smoothscroll from 'smoothscroll-polyfill';

const app = createApp(App);
app.use(store);
app.mount('#app');
smoothscroll.polyfill();
