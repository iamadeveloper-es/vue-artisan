<script lang="ts">
export default {
  name: 'va-counter'
};
</script>
<script setup lang="ts">
import VaButton from '../../molecules/va-button/index.vue';

const props = defineProps({
  modelValue: {
    default: 0,
    required: true
  }
});

const emit = defineEmits(['update:modelValue']);

const decrease = () => {
  emit('update:modelValue', props.modelValue - 1);
};

const increase = () => {
  emit('update:modelValue', props.modelValue + 1);
};

</script>
<template>
<div class="va-counter">
  <VaButton
    @clicked="decrease"
    :icon="['fa-solid', 'fa-minus']"
    :iconSize="15"
  />
  <span class="va-counter__amount ">{{modelValue}}</span>
  <VaButton
    @clicked="increase"
    :icon="['fa-solid', 'fa-plus']"
    :iconSize="15"
  />
</div>
</template>

<style lang="scss">
@use 'index';
</style>
