<script lang="ts">
import { onMounted } from 'vue'

export default {
    name: 'app-picture',
    props: {
        src: {
            type: String,
            required: true
        }
    },
    setup(props){

        

        onMounted(() => {
            
        })
        return{
            
        }
    }
}
</script>

<template lang="pug">
picture.app-picture(
:src="src")
    source(media="(min-width: 600w)", srcset="src/assets/images/vue2.jpeg", sizes="100vw")
    source(media="(min-width: 900w)", :srcset="src", sizes="100vw")
    source(media="(min-width: 1200w)", :srcset="src", sizes="800px")
    img(:src="src", alt="Imagen de Vue 3")
</template>

<style lang="scss">
@import 'index';
</style>