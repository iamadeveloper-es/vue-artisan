<script lang="ts">
import { onMounted, ref } from 'vue';
import AppSelect from '../index.vue';

export default {
  name: 'app-select-demo',
  components: {
    AppSelect
  },
  setup () {
    const selected = ref('');
    const selected2 = ref('');
    const selected3 = ref('');
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
    ];

    const options2 = [
      {
        value: '',
        text: 'Opción por defecto',
        selected: true, 
        disabled: true,
        hidden: true,
      },
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
        text: 'Opción 3'
      },
      {
        value: 'opcion4',
        text: 'Opción 4',
        disabled: true
      }
    ];

    const configComponent = () => {
      const optSelected = options.find((option) => option.selected);
      if (optSelected) {
        selected.value = optSelected.value;
      }
    };

    onMounted(() => {
      configComponent();
    });

    return {
      selected,
      selected2,
      selected3,
      options,
      options2
    };
  }
};
</script>

<template lang="pug">
.app-select-demo 
    app-select(
    :options="options"
    name="select-option-1",
    label="Selecciona una opción", 
    :floatingLabel="true",
    v-model="selected")

    app-select(
    :options="options"
    name="select-option-2",
    label="Selecciona una opción", 
    :outlinedLabel="true",
    v-model="selected2")

    app-select(
    :options="options2"
    name="select-option-3",
    label="Selecciona una opción", 
    :floatingLabel="true",
    v-model="selected3")
</template>

<style lang="scss">
.app-select-demo {
    .app-select {
        margin-bottom: 3rem;
    }
}
</style>
