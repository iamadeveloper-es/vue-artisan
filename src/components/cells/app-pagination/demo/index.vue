<script lang="ts">
export default {
    name: 'app-pagination-demo'
};
</script>
<script setup lang="ts">
import AppPagination from '../index.vue';
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

<template lang="pug">
app-pagination(
totalPages="20",
@update="getPosts")
div(v-if="data")
  pre {{ data }}

</template>
