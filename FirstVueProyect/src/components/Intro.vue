<template>
    <section class="intro">
      <div class="background-image"></div>
      <!-- Contenido del componente Intro -->
    </section>
  </template>
  
  <script>
  export default {
    // Lógica del componente Intro
  }
  </script>
  
  <style scoped>
  .intro {
    /* Estilos para el contenedor principal */
    position: relative;
    width: 100%;
    /* Establece una altura específica para el div de Intro */
    height: 400px; /* Por ejemplo, establece una altura de 400 píxeles */
  }
  
  .background-image {
    /* Estilos para el contenedor de la imagen de fondo */
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('../images/cabecera.png');
    background-size: cover;
    background-position: center;
    z-index: 1;
  }
  
  .intro::before {
    /* Estilos para el fondo negro */
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.11); /* Reducir la opacidad al 11% */
    z-index: 0;
  }
  </style>
  