<script lang="ts">

export default {
    name: 'app-progress',
    props: {
        modelValue: {
            type: Number,
            default: 0
        },
        value: {
            type: Number,
            default: 0
        },
        max: {
            type: Number,
            default: 100
        }
    },
    setup(){

        return {}
    }
}

</script>

<template lang="pug">
progress.app-progress(
:value="value"
:max="max"
)
</template>

<style lang="scss">
@import 'index';
</style>