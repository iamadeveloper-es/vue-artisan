<script lang="ts">
import { useRoute } from 'vue-router';

export default {
  name: 'va-test',
  setup () {
    const route = useRoute();
    return {
      route
    };
  }
};
</script>

<template>
<p>Ruta TEST</p>
<pre>{{ route }}</pre>
</template>
