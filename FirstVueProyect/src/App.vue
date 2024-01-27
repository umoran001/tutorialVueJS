<template>
  <div id="app">
    <header>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">Home</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/about">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/contact">Contact</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                  aria-expanded="false">
                  Dropdown
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li>
                    <hr class="dropdown-divider">
                  </li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" aria-disabled="true">Disabled</a>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </header>

    <main class="container-fluid py-4">
      <div class="row">
        <div class="col-md-9">
          <router-view /> <!-- Componente para mostrar las vistas de las diferentes páginas -->
        </div>
      </div>
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
@media (min-width: 992px) {
  .col-lg-3 {
    flex: 0 0 25%;
    max-width: 25%;
  }

  .col-lg-9 {
    flex: 0 0 75%;
    max-width: 75%;
  }
}
</style>
