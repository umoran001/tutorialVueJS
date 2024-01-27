import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Importa el archivo de rutas
import './assets/main.css'; // Importa tus estilos CSS
import './assets/css/bootstrap.min.css'
import './assets/js/bootstrap.bundle.min.js'

createApp(App)
  .use(router) // Usa el enrutador Vue
  .mount('#app');
