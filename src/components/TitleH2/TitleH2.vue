<template>
  <!-- <h2 class="text-center text-2xl font-bold border-b-2 border-green-400"> -->
  <h2>
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