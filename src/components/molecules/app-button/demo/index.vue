<script lang="ts">

import { ref } from 'vue'
import AppButton from '../index.vue'

export default {
    components: {
        AppButton
    },
    setup(){
        const counter = ref(0)
        const handleEvent = (ev) => {
            counter.value++
        }

        return{
            counter,
            handleEvent
        }
    }
}
</script>

<template lang="pug">
.app-button-demo
    app-button(@clicked="handleEvent")
    p(v-if="counter > 0") {{ `Botón clicado ${counter} ${counter === 1 ? 'vez' : 'veces'}` }}
</template>