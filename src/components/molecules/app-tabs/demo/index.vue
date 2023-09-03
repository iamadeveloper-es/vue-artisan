<script lang="ts">
import { ref } from 'vue'
import { useComponentFunctions } from '../../../../composables/component-functions'

import AppTabs from '../index.vue'
export default {
    name: 'app-tabs-demo',
    components: {AppTabs},
    setup(){
        const tabSelected = ref('tab2')
        const tabs = ref([
            {
                text: 'Tab 1',
                value: 'tab1',
                name: 'Tab'
            },
            {
                text: 'Tab 2 con nombre muy largo',
                value: 'tab2',
                name: 'Tab'
            },
            {
                text: 'Tab 3',
                value: 'tab3',
                name: 'Tab'
            }
        ])

        return{
            tabSelected,
            tabs
        }
    }
}
</script>

<template lang="pug">
app-tabs(
v-model="tabSelected"
:tabs="tabs"
)
    template(
    #tabBody
    )
        div(v-if="tabSelected === 'tab1'")
            p Tab1
        div(v-else-if="tabSelected === 'tab2'")
            p Tab2
        div(v-else)
            p Tab3
</template>