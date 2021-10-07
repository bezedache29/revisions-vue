<template>
  <nav class="navbar py-2 box" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link :to="home" class="navbar_item image is-48x48 ml-5">
        <img class="is-rounded" src="https://portfolio.ripley.eu/img/logo-min.jpg" alt="logo">
      </router-link>

      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu ml-4">
      <div class="navbar-start">
        <router-link :to="home" class="navbar-item">
          Accueil
        </router-link>

        <router-link :to="portfolio" class="navbar-item">
          Portfolio
        </router-link>
      </div>
    </div>

  </nav>
</template>

<script>
  export default {
    name:"navabr-app",
    computed: {
      home() {
        return { name: 'home-app' }
      },
      portfolio() {
        return { name: 'projects' }
      }
    }
  }
</script>

<style scoped>
  
</style>