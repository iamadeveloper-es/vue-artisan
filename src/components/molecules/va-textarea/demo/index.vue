<script lang="ts">
export default {
  name: 'va-textarea-demo'
};
</script>

<script setup lang="ts">
import { ref } from 'vue';
import VaTextarea from '../index.vue';

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
    outlinedLabel: true
    // borderBottom: true,
    // rows: 8
  },
  {
    label: 'Text Area con border inferior',
    name: 'textarea4',
    value: 'Texto de ejemplo',
    borderBottom: true
  }
]);
</script>

<template>
<div class="va-textarea-demo">
  <VaTextarea
    v-for="(item, index) in textareas"
    :key="index"
    v-model="item.value"
    :label="item.label"
    :name="item.name"
    :rows="item.rows"
    :outlinedLabel="item.outlinedLabel"
    :floatingLabel="item.floatingLabel"
    :borderBottom="item.borderBottom"
  />
</div>
</template>

<style lang="scss">
.va-textarea-demo {
    .va-textarea {
        margin-top: 2rem;
    }
}
</style>
