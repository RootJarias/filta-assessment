import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Tailwind CSS v3.2.7
import './tailwind.css';

createApp(App).use(router).mount('#app');
