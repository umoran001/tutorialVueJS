<template>
  <div id="app">
    <Header />
    <Intro />
    <Arbitrum />
    <LevelUp />
    <Roadmap />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Intro from './components/Intro.vue';
import Arbitrum from './components/Arbitrum.vue';
import LevelUp from './components/LevelUp.vue';
import Roadmap from './components/Roadmap.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Header,
    Intro,
    Arbitrum,
    LevelUp,
    Roadmap,
    Footer
  }
}
</script>

<style>
/* Estilos globales de la aplicación */
body, html {
  /* Establece la altura del body y html al 100% */
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
