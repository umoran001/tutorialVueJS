import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Importa el archivo de rutas

import './assets/main.css'; // Importa tus estilos CSS

createApp(App)
  .use(router) // Usa el enrutador Vue
  .mount('#app');
