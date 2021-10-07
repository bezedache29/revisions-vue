<template>
  <!-- <h2 class="text-center text-2xl font-bold border-b-2 border-green-400"> -->
  <h2 class="has-background-primary b-radius has-text-centered p-2 is-size-3 is-uppercase has-text-weight-bold has-text-white my-5">
    <slot>{{ text }}</slot>
  </h2>
</template>

<script>
  export default {
    name:"title-h2",
    props: {
      text: String
    },
  }
</script>