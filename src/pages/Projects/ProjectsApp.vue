<template>
  <section class="container">
    <TitleH1>Mon portfolio</TitleH1>
  </section>
  <router-view></router-view>
</template>

<script>

  import TitleH1 from '../../components/TitleH1/TitleH1.vue'

  export default {
    name:"projects-app",
    components: {
      TitleH1
    },
    data() {
      return {
        
      }
    },
  }
</script>

<style scoped>
  
</style>