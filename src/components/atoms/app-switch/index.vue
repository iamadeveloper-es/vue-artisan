<script lang="ts">
export default {
  name: 'app-switch'
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
// const slots = useSlots();

// const isActive = ref(false);

// const setActiveColor = computed(() => {
//   return `app-check-radio__icon--${props.activeColor}`;
// });

// const hasSlot = computed(() => {
//   return !!slots['label'];
// });

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

<template lang="pug">
.app-switch-wrapper(
:class="{'disabled': disabled}" 
:ref="id")
    label.app-switch(:for="id")
        input(
        :aria-checked="modelValue?.status" 
        :id="id" 
        :disabled="disabled"
        :checked="modelValue?.status"
        role="checkbox" 
        type="checkbox" 
        :value="modelValue"
        @change="emitValue($event)")
        span.app-switch__slider
</template>

<style lang="scss">
@import 'index';
</style>
