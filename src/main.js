import { createApp } from 'vue';
import App from './App.vue';

// Vue Router v4.0.3
import router from './router/index';

// Pinia v2.0.28
import pinia from './stores/index';

// Tailwind CSS v3.2.7
import './tailwind.css';

// Auto Animate v1.0.0-beta.6
import { autoAnimatePlugin } from '@formkit/auto-animate/vue';

const VueApp = createApp(App);

VueApp.use(pinia);
VueApp.use(router);
VueApp.use(autoAnimatePlugin);

VueApp.mount('#app');
