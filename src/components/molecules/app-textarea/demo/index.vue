<script lang="ts">
import { ref } from 'vue'
import AppTextarea from '../index.vue'

export default {
    name: 'app-textarea-demo',
    components: {AppTextarea},
    setup(){

        const textareas = ref([
            {
                label: 'Text Area normal',
                name: 'textarea1',
                value: ''
            },
            {
                label: 'Text Area sin border inferior y label flotante',
                name: 'textarea2',
                value: '',
                floatingLabel: true
            },
            {
                label: 'Text Area con label flotante',
                name: 'textarea3',
                value: '',
                floatingLabel: true,
                borderBottom: true,
                rows: 8
            },
            {
                label: 'Text Area con label outlined',
                name: 'textarea3a',
                value: '',
                outlinedLabel: true,
                // borderBottom: true,
                // rows: 8
            },
            {
                label: 'Text Area con border inferior',
                name: 'textarea4',
                value: 'Texto de ejemplo',
                borderBottom: true
            }
        ])
        return{
            textareas
        }
    }
}
</script>

<template lang="pug">
.app-textarea-demo 
    app-textarea(
    v-for="(item, index) in textareas",
    :key="index", 
    v-model="item.value", 
    :label="item.label", 
    :name="item.name", 
    :rows="item.rows"
    :outlinedLabel="item.outlinedLabel", 
    :floatingLabel="item.floatingLabel", 
    :borderBottom="item.borderBottom")
</template>

<style lang="scss">
.app-textarea-demo{
    .app-textarea{
        margin-top: 2rem
    }
}
</style>