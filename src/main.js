import { createApp } from 'vue';
import App from './App.vue';
import './styles/main.scss';
import { store } from '@/store/store';

const app = createApp(App);
app.use(store);
app.mount('#app');
document.title = 'Alessandro Roic';
