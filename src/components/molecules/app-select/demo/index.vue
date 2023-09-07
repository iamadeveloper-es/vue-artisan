<script lang="ts">

import { onMounted, ref } from 'vue'
import AppSelect from '../index.vue'

export default {
    name: 'app-select-demo',
    components: {
        AppSelect
    },
    setup() {
        const selected = ref('')
        const selected2 = ref('')
        const options = [
            {
                value: 'opcion1',
                text: 'Opción 1'
            },
            {
                value: 'opcion2',
                text: 'Opción 2'
            },
            {
                value: 'opcion3',
                text: 'Opción 3',
                selected: true
            },
            {
                value: 'opcion4',
                text: 'Opción 4',
                disabled: true
            }
        ]

        const configComponent = () => {
            const optSelected = options.find(option => option.selected)
            if(optSelected){
                selected.value = optSelected.value
            }
        }

        onMounted(() => {
            configComponent()
        })

        return{
            selected,
            selected2,
            options
        }
    }
}
</script>

<template lang="pug">
.app-select-demo 
    app-select(
    :options="options"
    name="select-option",
    label="Selecciona una opción", 
    :floatingLabel="true",
    v-model="selected")

    app-select(
    :options="options"
    name="select-option",
    label="Selecciona una opción", 
    :outlinedLabel="true",
    v-model="selected2")
</template>

<style lang="scss">
.app-select-demo {
    .app-select{
        margin-bottom: 3rem;
    }
}
</style>