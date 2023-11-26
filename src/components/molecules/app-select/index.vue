<script lang="ts">
export default {
  name: 'app-select'
};
</script>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useComponentFunctions } from '../../../composables/component-functions';

defineProps({
  modelValue: {
    type: String
  },
  options: {
    type: Array,
    required: true
  },
  name: {
    type: String
  },
  label: {
    type: String,
    default: 'select label'
  },
  autofocus: {
    type: Boolean,
    default: false
  },
  required: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  multiple: {
    type: Boolean,
    default: false
  },
  size: {
    type: Number
  },
  outlinedLabel: {
    type: Boolean,
    default: false
  },
  floatingLabel: {
    type: Boolean,
    default: false
  },
  borderBottom: {
    type: Boolean,
    default: false
  }
});
const { randomId } = useComponentFunctions();
const id = ref('');
  
const emit = defineEmits(['update:modelValue']);
const emitValue = (ev) => {
  emit('update:modelValue', ev.target.value);
};

const configComponent = () => {
  id.value = randomId();
};

onMounted(() => {
  configComponent();
});
</script>

<template lang="pug">
.app-select.form-field-wrapper(
:class="{'is-focused': outlinedLabel && modelValue || floatingLabel && modelValue}"
)
    select.app-input(@change="emitValue", 
    :id="id",
    :name="name",
    :autofocus="autofocus", 
    :required="required",
    :disabled="disabled"
    :aria-label="label"
    :size="size"
    :multiple="multiple"
    :class="{'b-bottom': borderBottom, 'disabled': disabled}")
        option(v-for="(option, index) in options", 
        :key="index", 
        :value="option.value",
        :selected="option.selected",
        :disabled="option.disabled",
        :hidden="option.hidden"
        ) {{ option.text }}
    label.app-label(
    :for="id",
    :class="{ 'label-float': floatingLabel, 'label-outlined' : outlinedLabel, 'label-disabled': disabled}"
    ) {{ label }}
</template>

<style lang="scss">
@import 'index';
</style>
