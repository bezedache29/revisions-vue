<template>
  <section class="container">
    <TitleH1>Qui suis-je ?</TitleH1>

    <p class="my-5 mt-10">
      <span class="font-bold">Christophe Salou 39 ans</span>. Ancien technicien / administrateur réseaux informatiques. J'ai entrepris ma reconversion en 2016. Je m'interesse au multimédia et aux technologies informatique depuis mes 15 ans, mais je m'interesse au developpement web depuis mes 20 ans et développe des sites web pour particuliers ou associations de manière autodidacte.
    </p>

    <p class="my-5">
      Je propose aujourd'hui mes services et mets à disposition mes qualités de développeur passioné et rigoureux. Disponible pour un stage front-end et/ou back-end d'une durée de 2 mois minimum en distanciel partout en France et/ou en présentiel sur Nantes.
    </p>

    <TitleH2>Languages</TitleH2>

    <ol class="ml-4">
      <li>HTML 5</li>
      <li>CSS 3</li>
      <li>PHP 7/8</li>
      <li>Javascript ES5 à ES9</li>
      <li>TypeScript 4</li>
    </ol>

    <TitleH2>Frameworks CSS</TitleH2>

    <ol class="ml-4">
      <li>Bootstarp 4 / 5</li>
      <li>Materializecss</li>
      <li>Tailwind CSS</li>
      <li>Bulma</li>
    </ol>

    <TitleH2>Frameworks JS</TitleH2>

    <ol class="ml-4">
      <li>jQuery</li>
      <li>React js (avant et après 16.8) - React router - Redux</li>
      <li>Vue.js 3 - VueX - VueRouter</li>
    </ol>

    <TitleH2>Frameworks PHP</TitleH2>

    <ol class="ml-4">
      <li>Laravel 7/8</li>
      <li>Symfony 5</li>
    </ol>

    <TitleH2>Bases de données</TitleH2>

    <ol class="ml-4">
      <li>MySql</li>
      <li>Firebase</li>
      <li>MongoDB</li>
    </ol>

    <TitleH2>Mobile</TitleH2>

    <ol class="ml-4">
      <li>React Native</li>
    </ol>

  </section>
</template>


HTML 5
CSS 3
PHP 7/8
JS ES6 à ES9
TypeScript 4

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