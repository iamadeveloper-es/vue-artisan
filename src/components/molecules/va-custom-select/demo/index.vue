<script lang="ts">
export default {
  name: 'va-custom-select-demo'
};
</script>
<script setup lang="ts">
import { ref } from 'vue';
import VaCustomSelect from '../index.vue';

const selectedValue = ref('');
const selectedValue2 = ref('');
const selectedValue3 = ref('');
const options = ref([
  { label: 'Default', value: 'default', disabled: true },
  { label: 'Spain', value: 'spain' },
  { label: 'France', value: 'france' },
  { label: 'Italy', value: 'italy' }
]);
</script>

<template>
<div class="va-custom-select-demo">
  <VaCustomSelect
    v-model="selectedValue"
    :options="options"
    inputName="selectOne"
    :outlinedLabel="true"
  />
  <VaCustomSelect
    v-model="selectedValue2"
    :options="options"
    inputName="selectOne"
    :floatingLabel="true"
  />
  <VaCustomSelect
    v-model="selectedValue3"
    :options="options"
    inputName="selectOne"
    :floatingLabel="true"
    :borderBottom="true"
  />
</div>
</template>

<style lang="scss">
.va-custom-select-demo {
    .va-custom-select {
        margin-bottom: 3rem;
    }
}
</style>
