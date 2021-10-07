<template>
  <h1 class="text-center text-4xl font-bold border p-2 rounded-md bg-green-400 text-white uppercase">
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