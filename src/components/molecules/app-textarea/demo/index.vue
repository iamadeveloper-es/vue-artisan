<script lang="ts">
import { ref } from 'vue'
import AppTextarea from '../index.vue'

export default {
    name: 'app-textarea-demo',
    components: {AppTextarea},
    setup(){
        const val1 = ref('')
        const val2 = ref('Texto de ejemplo')
        const val3 = ref('Texto de ejemplo')
        return{
            val1,
            val2,
            val3
        }
    }
}
</script>

<template lang="pug">
.app-textarea-demo 
    app-textarea(
    label="Text Area"
    :name="'my-textarea1'"
    :floatingLabel="true"
    :borderBottom="true"
    v-model="val")
    app-textarea(
    label="Text Area sin label flotante"
    :name="'my-textarea2'"
    :borderBottom="true"
    v-model="val2")
    app-textarea(
    label="Text Area sin borde inferior"
    :name="'my-textarea3'"
    :floatingLabel="true"
    v-model="val3")
</template>

<style lang="scss">
.app-textarea-demo{
    .app-textarea-wrapper{
        margin-top: 2rem
    }
}
</style>