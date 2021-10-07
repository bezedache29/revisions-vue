<template>
  <!-- <h1 class="text-center text-4xl font-bold border p-2 rounded-md bg-green-400 text-white uppercase"> -->
  <h1 class="has-background-primary perso-h1 has-text-centered p-2 is-size-1 is-uppercase has-text-weight-bold has-text-white">
    <slot>{{ text }}</slot>
  </h1>
</template>

<script>
  export default {
    name:"title-h1",
    props: {
      text: String
    },
  }
</script>

<style scoped>
  .perso-h1 {
    border-radius: 5px;
  }
</style>