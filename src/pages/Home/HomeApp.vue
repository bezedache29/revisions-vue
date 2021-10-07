<template>
  <section class="container">
    <TitleH1>Qui suis-je ?</TitleH1>

    <p class="my-5 mt-10">
      <span class="font-bold">Christophe Salou 39 ans</span>. Ancien technicien / administrateur réseaux informatiques. J'ai entrepris ma reconversion en 2016. Je m'interesse au multimédia et aux technologies informatique depuis mes 15 ans, mais je m'interesse au developpement web depuis mes 20 ans et développe des sites web pour particuliers ou associations de manière autodidacte.
    </p>

    <p class="my-5">
      Je propose aujourd'hui mes services et mets à disposition mes qualités de développeur passioné et rigoureux. Disponible pour un stage front-end et/ou back-end d'une durée de 2 mois minimum en distanciel partout en France et/ou en présentiel sur Nantes.
    </p>

    <TitleH2>Mes compétences</TitleH2>
  </section>
</template>

<script>

  import TitleH1 from '../../components/TitleH1/TitleH1.vue'
  import TitleH2 from '../../components/TitleH2/TitleH2.vue'

  export default {
    name:"home-app",
    components: {
      TitleH1,
      TitleH2,
    },
    data() {
      return {
        
      }
    },
  }
</script>

<style scoped>
  
</style>