<template>
  <h1 class="has-background-primary b-radius has-text-centered p-2 is-size-1 is-uppercase has-text-weight-bold has-text-white">
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

<style>
  .b-radius {
    border-radius: 5px;
  }
</style>