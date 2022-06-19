import { createApp } from 'vue'
import App from './App.vue'
import mitt from 'mitt'
import store from './assets/store.js'

let emitter = mitt();
let app = createApp(App);
app.config.globalProperties.emitter = emitter;
app.use(store).mount('#app');
