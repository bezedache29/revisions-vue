<template>
  <!-- Start card -->
  <div class="card m-4" @click="goToDetailProject(project.id)">
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-96x96">
            <img class="is-rounded" src="https://avatars.githubusercontent.com/u/23324161?v=4" alt="Placeholder image">
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">{{ project.name }}</p>
          <p class="subtitle is-6">{{ project.full_name }}</p>
        </div>
      </div>

      <div class="content">
        {{ project.description ? project.description : 'Pas de description' }}
        <span class="language">{{ project.language }}</span>
      </div>
    </div>
  </div>
  <!-- End card -->
</template>

<script>
  export default {
    name:"card-app",
    props: {
      project: Object,
    },
    data() {
      return {
        
      }
    },
  }
</script>

<style scoped>
  .cards {
    margin-left: auto;
    margin-right: auto;
  }
  .card {
    width: 30%;
    transition: transform 330ms ease-in-out;
  }
  .card:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
  .language {
    font-style: italic;
    color: blue;
  }
</style>