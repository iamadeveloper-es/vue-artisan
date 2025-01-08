<script lang="ts">
export default {
  name: 'va-pagination-demo'
};
</script>
<script setup lang="ts">
import VaPagination from '../index.vue';
import { ref } from 'vue';

const data = ref();

const getPosts = (ev: number) => {

  fetch(`https://jsonplaceholder.typicode.com/posts?_page=${ev}&_limit=5`)
    .then(async response => {
      const link = response.headers.get('link'); // link to next page (REST)
      const json = await response.json(); // data payload
      console.log(link, json);
      data.value = json;
    });
};
</script>

<template>

<va-pagination totalPages="20" @update="getPosts"></va-pagination>
<div v-if="data">
  <pre>{{ data }}</pre>
</div>
</template>
