<script lang="ts">
export default {
  name: 'va-textarea'
};
</script>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useComponentFunctions } from '../../../composables/component-functions';

const props = defineProps({
  modelValue: {
    default: '',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  label: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: ''
  },
  required: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  readOnly: {
    type: Boolean,
    default: false
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
  ariaLabelledby: {
    type: String,
    default: 'Select Input'
  },
  rows: {
    type: Number,
    default: 4
  },
  maxLength: {
    type: Number
  },
  minLength: {
    type: Number
  },
  validations: {
    type: String
  }
});

const { randomId } = useComponentFunctions();
const isFocused = ref(false);
const id = ref('');

const emit = defineEmits(['update:modelValue', 'onFocus', 'onBlur']);

const emitValue = (ev: Event) => {
  const target = ev.target as HTMLInputElement;
  emit('update:modelValue', target.value);
};

const emitFocus = (ev: FocusEvent) => {
  isFocused.value = true;
  emit('onFocus', ev);
};

const emitBlur = (ev: FocusEvent) => {
  isFocused.value = props.modelValue.length > 0 ? true : false;
  emit('onBlur', ev);
};

const configComponent = () => {
  id.value = randomId();
  isFocused.value = props.modelValue.length > 0;
};

onMounted(() => {
  configComponent();
});
</script>

<template>
<div
class="va-textarea form-field-wrapper"
:class="{'is-focused': (floatingLabel || outlinedLabel) && isFocused}"
>
  <label
    class="va-label"
    :class="{'label-float' : floatingLabel, 'label-outlined' : outlinedLabel, 'label-disabled': disabled}"
    :for="id"
  >{{ label }}</label>
  <textarea
    class="va-input"
    :class="{'b-bottom': borderBottom, 'disabled': disabled}"
    :rows="rows"
    :maxLength="maxLength"
    :minLength="minLength"
    :disabled="disabled"
    :placeholder="placeholder"
    :required="required"
    :readonly="readOnly"
    :aria-label="placeholder || label"
    :aria-labelledby="ariaLabelledby"
    :id="id"
    :name="name"
    :value="modelValue"
    aria-placeholder="dsf"
    :data-validations="validations"
    @input="emitValue"
    @focus="emitFocus"
    @blur="emitBlur"
  ></textarea>
</div>
<span class="form-error-message" :data-validation-error="`error-message-${id}`"></span>
</template>

<style lang="scss">
@import 'index';
</style>
