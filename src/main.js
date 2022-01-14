import { createApp } from 'vue';
import App from './App.vue';
import './styles/main.scss';
import { store } from '@/store/store';

const app = createApp(App);
app.mount('#app');
app.use(store);
document.title = 'Alessandro Roic';
