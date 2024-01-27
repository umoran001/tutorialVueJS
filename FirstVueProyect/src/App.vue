<!-- App.vue -->
<template>
  <header>
    <h1>FirstVueProyect</h1>
  </header>
  <div id="app">
    <Menu /> <!-- Aquí se incluye el componente de menú -->sdafdsafaef
    <router-view /> <!-- Componente para mostrar las vistas de las diferentes páginas -->
  </div>
</template>

<script>
import Menu from './components/Menu.vue'; // Importa el componente de menú

export default {
  components: {
    Menu // Registra el componente de menú
  }
  // Otras opciones y lógica de la aplicación
}
</script>

<style>
/* Estilos generales de la aplicación */
</style>