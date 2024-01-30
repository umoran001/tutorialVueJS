<template>
  <div id="app">
    <header>
      <nav class="navbar navbar-expand-lg fixed-top">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            <img src="/src/images/logo.png" alt="" width="30" height="24">
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasnavbar"
            aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel">FirstVueProyect</h5>
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                  <a class="nav-link mx-lg-2" href="#">Product</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link mx-lg-2" href="/about">About</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link mx-lg-2" href="#">Community</a>
                </li>
              </ul>
              <li class="nav-button">
                <a class="btn btn-outline-primary mx-lg-2" href="#">LaunchPad</a>
              </li>
            </div>
          </div>
        </div>
      </nav>
    </header>

    <main class="container-fluid py-4">
      <router-view /> <!-- Componente para mostrar las vistas de las diferentes páginas -->
    </main>


    <footer class="bg-light text-dark pt-5 pb-4">
      <div class="container text-center twxt-md-start">
        <div class="row text-center text-md-start">
          <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 class="text-uppercase mb-4 font-weight-bold">FirstVueProyect</h5>
            <p>FirstVueProyect es una aplicación web desarrollada con Vue.js.</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import Menu from './components/Menu.vue'; // Importa el componente de menú

export default {
  components: {
    Menu // Registra el componente de menú
  },
  // Otras opciones y lógica de la aplicación
}
</script>

<style>
/* Estilos generales de la aplicación */
</style>
