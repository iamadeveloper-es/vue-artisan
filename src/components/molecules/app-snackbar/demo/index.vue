<script lang="ts">
import { ref } from 'vue'

import AppSnackbar from '../index.vue'
export default {
    name: 'app-snackbar-demo',
    components: {AppSnackbar},
    setup(){
        const snackbar = ref(null)
        const snackbar2 = ref(null)

        const handleSnackbar = () => {
            snackbar.value?.show()
        }

        const handleSnackbar2 = () => {
            snackbar2.value?.show()
        }

        return{
            snackbar,
            snackbar2,
            handleSnackbar,
            handleSnackbar2
        }
    }
}
</script>

<template lang="pug">
button(@click="handleSnackbar") Mostrar snackbar
button(@click="handleSnackbar2") Mostrar snackbar con icono
app-snackbar(
ref="snackbar", 
:duration="5") 
    template(#body)
        p Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed soluta magni unde.

app-snackbar(
ref="snackbar2", 
:hasIcon="true") 
    template(#body)
        p Soy un snackbar con un icono :)
</template>