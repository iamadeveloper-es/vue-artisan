<script lang="ts">
export default {
  name: 'app-input-field-demo'
};
</script>

<script setup lang="ts">
import { ref } from 'vue';
import AppInputField from '../index.vue';

const inputs = ref([
  {
    value: 'Texto de ejemplo',
    name: 'input-text',
    label: 'Input con label outlined',
    placeholder: 'Escribe algo...',
    maxlength: 20,
    outlinedLabel: true
  },
  {
    value: '',
    name: 'input-text',
    label: 'Input con label flotante y border inferior',
    placeholder: 'Escribe algo...',
    maxlength: 20,
    floatingLabel: true,
    borderBottom: true
  },
  {
    value: '',
    type: 'password',
    name: 'input-password',
    label: 'Input tipo password',
    placeholder: 'Escribe algo...',
    floatingLabel: true,
    icon: ['fa-solid', 'fa-eye'],
    iconOnToggle: ['fa-solid', 'fa-eye-slash']
  },
  {
    value: 'df',
    type: 'search',
    disabled: true,
    name: 'input-search',
    label: 'Input tipo search',
    placeholder: 'Escribe algo...',
    floatingLabel: true
  },
  {
    value: '',
    type: 'number',
    name: 'input-text',
    label: 'Input tipo number',
    placeholder: 'Escribe algo...',
    min: 2,
    max: 10
  },
  {
    value: '',
    type: 'date',
    name: 'input-date',
    label: 'Input tipo date',
    placeholder: 'Escribe algo...',
    floatingLabel: true,
    icon: ['fa-regular', 'fa-calendar']
  }
]);

const handleOnFocus = (ev: Event) => {
  console.log('onFocus');
  console.log(ev);
};

const handleOnBlur = (ev: Event) => {
  console.log('onBlur');
  console.log(ev);
};
</script>

<template lang="pug">
.app-input-field-demo
  p Inputs y sus variantes
  template(v-for="(item, index) in inputs", :key="index")
    app-input-field(
    :type="item.type"
    :name="item.name"
    :label="item.label",
    :placeholder="item.placeholder", 
    :floatingLabel="item.floatingLabel",
    :outlinedLabel="item.outlinedLabel"
    :borderBottom="item.borderBottom", 
    :min="item.min",
    :max="item.max",
    :disabled="item.disabled",
    :maxlength="item.maxlength",
    :icon="item.icon",
    :iconOnToggle="item.iconOnToggle",
    v-model="item.value",
    @onFocus="handleOnFocus", 
    @onBlur="handleOnBlur")
    p(v-if="item.value") Valor del input: {{ item.value }}
</template>

<style lang="scss">
.app-input-field-demo {
    .app-input-field {
        margin-top: 2rem;
    }
}
</style>
