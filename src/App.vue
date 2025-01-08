<script lang="ts">
import Dashboard from './views/dashboard-view/index.vue';

export default {
  components: {
    Dashboard
  },
  setup () {}
};
</script>

<template>
<div class="va-wrapper">
  <header>
    <h1>Vue Artisan</h1>
    <h2>Set minimalísta de componentes para Vue 3</h2>
  </header>
  <dashboard></dashboard>
</div>
</template>

<style lang="scss" scoped>
body{
  padding: 0;
  margin: 0;
}
.va-wrapper{
  // padding: .75em;

  header{
    background-color: #4FC08D;
    padding: 1em;
    font-size: 24px;
    color: #2c3e50;
    margin-bottom: 2em;

    h1, h2{
      margin: .2em 0;
    }

    h1{
      font-size: 1em;
    }

    h2{
      font-size: .75em;
    }
  }
}
</style>
