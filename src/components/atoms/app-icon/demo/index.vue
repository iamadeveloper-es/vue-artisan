<script lang="ts">
import { ref } from 'vue'

import AppIcon from '../index.vue'
export default {
    name: 'app-icon-demo',
    components: {AppIcon},
    setup(){
        const message = ref('')

        const handleEvent = (ev: Event) => {
            message.value = 'Icono clickado'
        }

        return{
            message,
            handleEvent
        }
    }
}
</script>

<template lang="pug">
app-icon(
:icon="['fa-solid', 'fa-image']",
variant="primary" 
@iconClicked="handleEvent")
p Click en el icono
p(v-if="message") {{ message }}
</template>