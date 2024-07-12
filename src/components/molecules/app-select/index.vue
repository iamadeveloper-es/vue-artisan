<script lang="ts">
export default {
  name: 'app-select'
};
</script>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useComponentFunctions } from '../../../composables/component-functions';

const props = defineProps({
  modelValue: {
    type: [String, Number, Object]
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
  },
  validations: {
    type: String
  }
});
const { randomId } = useComponentFunctions();
const id = ref('');
  
const emit = defineEmits(['update:modelValue', 'onChange']);

const model = computed({
  get () {
    return props.modelValue || isSelected.value ? props.modelValue : emit('update:modelValue', props.options[0].value);
  },
  set (value) {
    emit('update:modelValue', value);
  },
});

const isSelected = computed(() => {
  return props.options.some(option => option.selected);
});

// const setSelected = computed(() => {
//   const selectedIndex = props.options.findIndex(option => option?.selected);
//   return selectedIndex ? selectedIndex : props.options[0].value;
// });

const emitValue = (ev: Event) => {
  const target = ev.target as HTMLInputElement;
  emit('onChange', target.value);
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
v-if="options.length",
:class="{'is-focused': outlinedLabel && modelValue || floatingLabel && modelValue || isSelected}"
)
  .form-field-wrapper__inner
    select.app-input(
    :id="id",
    :name="name",
    :autofocus="autofocus", 
    :required="required",
    :disabled="disabled",
    :aria-label="label",
    :size="size",
    :multiple="multiple",
    :data-validations="validations",
    v-model="model",
    @change="emitValue",
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
  span.form-error-message(:data-validation-error="`error-message-${id}`") df
</template>

<style lang="scss">
@import 'index';
</style>
