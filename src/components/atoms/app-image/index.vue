<script lang="ts">
export default {
    name: 'app-image'
};
</script>
<script setup lang="ts">

defineProps({
    src: {
        type: String,
        required: true
    },
    alt: {
        type: String
    }
});

</script>

<template lang="pug">
img.app-image(
:src="src", 
:alt="alt")
</template>

<style lang="scss">
@import 'index';
</style>
