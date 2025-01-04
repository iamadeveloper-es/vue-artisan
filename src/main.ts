import './assets/fontawesome/css/all.min.css';
import './assets/scss/index.scss';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './app.vue';
import router from './router';
import vClickOutside from 'click-outside-vue3';
// import iconManager from './plugins/iconManager';

const app = createApp(App);

app.use(createPinia());
app.use(router);

// app.use(iconManager, {
//   icons: {
//     src: './assets/fontawesome/css/all.min.css'
//   }
// });

app.mount('#app');
app.use(vClickOutside);
