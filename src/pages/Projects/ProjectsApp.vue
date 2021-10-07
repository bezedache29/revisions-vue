<template>
  <section class="container" v-if="!isHideParent">
    <TitleH1>Mon portfolio</TitleH1>

    <div class="cards container mt-5 is-flex is-flex-wrap-wrap is-justify-content-space-evenly">

      <CardApp v-for="(project, index) in getProjects" :key="index" :project="project" />

    </div>
  </section>
  <router-view></router-view>
</template>

<script>

  import TitleH1 from '../../components/TitleH1/TitleH1.vue'
  import CardApp from '../../components/CardApp/CardApp.vue'

  import { mapActions, mapGetters, mapState } from 'vuex'

  export default {
    name:"projects-app",
    components: {
      TitleH1,
      CardApp
    },
    data() {
      return {
        
      }
    },
    mounted() {
      this.searchMyProjects()
      this.hideParent(false)
    },
    computed: {
      ...mapGetters('projects', [
        'getProjects'
      ]),
      ...mapState('projects', [
        'isHideParent'
      ])
    },
    methods: {
      ...mapActions('projects', [
        'searchMyProjects',
        'hideParent'
      ])
    },
  }
</script>

<style scoped>
  
</style>