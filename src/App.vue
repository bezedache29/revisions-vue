<template class="bg">
  <NavbarApp />
  <router-view></router-view>
</template>

<script>
import NavbarApp from './components/partials/Navbar/NavbarApp.vue'

export default {
  name: 'App',
  components: {
    NavbarApp
  }
}
</script>

<style>
  .bg {
    background-color: #FFFAFA;
  }
</style>