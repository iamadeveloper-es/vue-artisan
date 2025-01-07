<script lang="ts">
export default {
  name: 'app-counter'
};
</script>
<script setup lang="ts">
import AppButton from '../../molecules/app-button/index.vue';
import AppIcon from '../../atoms/va-icon/index.vue';

const props = defineProps({
  modelValue: {
    default: '',
    required: true
  }
});

const emit = defineEmits(['update:modelValue', 'onClick']);

const emitEvent = (ev: Event) => {
  emit('onClick', ev);
};

const decrease = () => {
  emit('update:modelValue', props.modelValue - 1);
};

const increase = () => {
  emit('update:modelValue', props.modelValue + 1);
};

</script>
<template lang="pug">
.app-counter
    app-button(
      @clicked="decrease",
      :icon="['fa-solid', 'fa-minus']",
      :iconSize="15")
    span.app-counter__amount {{modelValue}}
    app-button(
      @clicked="increase",
      :icon="['fa-solid', 'fa-plus']",
      :iconSize="15")

</template>

<style lang="scss">
@use 'index';
</style>
