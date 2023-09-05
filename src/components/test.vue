<script lang="ts">
import { useRoute } from 'vue-router'

export default {
    name: 'app-test',
    setup(){
        const route = useRoute()
        return{
            route
        }
    }
}
</script>

<template lang="pug">
p Ruta TEST
pre {{ route }}
</template>