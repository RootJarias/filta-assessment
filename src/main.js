import { createApp } from 'vue';
import App from './App.vue';

// Vue Router v4.0.3
import router from './router/index';

// Tailwind CSS v3.2.7
import './tailwind.css';

const VueApp = createApp(App);

VueApp.use(router);

VueApp.mount('#app');
