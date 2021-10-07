<template>
  <section class="container">
    <TitleH1>Détails du projet : {{ getProject.name }}</TitleH1>

    <article class="message is-info mt-5">
      <div class="message-header">
        <p>Descritpion du projet</p>
      </div>
      <div class="message-body">
        {{ getProject.description ? getProject.description : 'Pas de description sur ce projet' }}
      </div>
    </article>

    <article class="message is-info mt-5">
      <div class="message-header">
        <p>Divers</p>
      </div>
      <div class="message-body">
        <ul>
          <li class="my-2">Accès : {{ getProject.visibility }}</li>
          <li class="my-2">branche par défault : {{ getProject.default_branch }}</li>
          <li class="my-2">Nombre d'abonnés : {{ getProject.subscribers_count }}</li>
        </ul>
      </div>
    </article>

    <a class="button is-primary" v-bind:href="getProject.html_url" target="_blank">Voir le github</a>

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