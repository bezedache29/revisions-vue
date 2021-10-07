<template>
  <section class="container">
    <TitleH1>Détails du projet : {{ getProject.name }}</TitleH1>
  </section>
</template>

<script>

  import { mapActions, mapGetters } from 'vuex'
  import TitleH1 from '../../components/TitleH1/TitleH1.vue'

  export default {

    name:"project-app",
    components: {
      TitleH1
    },
    mounted() {
      this.hideParent(true)
    },
    computed: {
      ...mapGetters('projects', [
        'getProject'
      ])
    },
    methods: {
      ...mapActions('projects', [
        'hideParent',
      ]),
    },
    // Avant de quitter la page
    beforeRouteLeave (_, __, next) {
      this.hideParent(false)
      next()
    }
  }
</script>

<style scoped>
  
</style>