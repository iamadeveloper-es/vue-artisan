<script lang="ts">
export default {
    name: 'app-tabs-demo'
};
</script>

<script setup lang="ts">
import { ref } from 'vue';
import AppTabs from '../index.vue';

const tabSelected = ref('tab2');
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
]);
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
