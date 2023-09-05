<script lang="ts">

export default {
    name: 'app-image',
    props: {
        src: {
            type: String,
            required: true
        },
        alt: {
            type: String
        }
    },
    setup(){

        return{
            
        }
    }
}
</script>

<template lang="pug">
img.app-image(
:src="src", 
:alt="alt")
</template>

<style lang="scss">
@import 'index';
</style>