<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Dashboard from './views/dashboard.vue'

export default {
  components: {
    Dashboard
  },
  setup(){

  }
}
</script>

<template>
  <dashboard></dashboard>
</template>

<style>
body{
  height: 5000px;
  background-color: #E6E5E6;
}
</style>
