<script lang="ts">
export default {
  name: 'va-switch'
};
</script>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useComponentFunctions } from '../../../composables/component-functions';
// import { useSlots } from 'vue';

defineProps({
  modelValue: {
    default: '',
    required: true
  },
  disabled: {
    type: Boolean,
    default: false
  },
  value: {
    type: [String, Number, Boolean],
    default: false
  },
  cClass: {
    type: [String, Array]
  },
  activeColor: {
    type: String,
    default: 'primary'
  }
});
const { randomId } = useComponentFunctions();
const id = ref('');

const emit = defineEmits(['update:modelValue', 'onChange']);

const emitValue = (ev: Event) => {
  const target = ev.target as HTMLInputElement;
  emit('update:modelValue', target.value);
  emit('onChange', ev);
};

const configComponent = () => {
  id.value = randomId();
};

onMounted(() => {
  configComponent();
});
</script>

<template>
<div
class="va-switch-wrapper"
:class="{'disabled': disabled}"
:ref="id"
>
  <label
    class="va-switch"
    :for="id"
  >
    <input
      :aria-checked="modelValue?.status"
      :id="id"
      :disabled="disabled"
      :checked="modelValue?.status"
      role="checkbox"
      type="checkbox"
      :value="modelValue"
      @change="emitValue($event)"
    >
    <span class="va-switch__slider"></span>
  </label>
</div>
</template>

<style lang="scss">
@import 'index';
</style>
