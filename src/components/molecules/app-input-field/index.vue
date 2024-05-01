<script lang="ts">
export default {
  name: 'app-input-field'
};
</script>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useComponentFunctions } from '../../../composables/component-functions';

const props = defineProps({
  modelValue: {
    default: '',
    required: true
  },
  type: {
    type: String,
    default: 'text'
  },
  name: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  placeholder: {
    type: String
  },
  ariaLabelledby: {
    type: String,
    default: 'Input'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  required: {
    type: Boolean,
    default: false
  },
  readonly: {
    type: Boolean,
    default: false
  },
  min: {
    type: Number
  },
  max: {
    type: Number
  },
  maxlength: {
    type: Number
  },
  showLabel: {
    type: Boolean,
    default: true
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
  labelPosition: {
    type: String,
    default: 'top'
  },
  icon: {
    type: Array,
    default: () => ['fa-regular', 'fa-circle-xmark']
  },
  iconOnToggle: {
    type: Array
  },
  puti: {
    type: String
  }
});
const { randomId } = useComponentFunctions();
const isFocused = ref(false);
const inputType = ref(props.type);
const showSecondaryIcon = ref(false);
const id = ref('');


const getIcon = computed(() => {
  return showSecondaryIcon.value && props.iconOnToggle?.length ? 
    props.iconOnToggle :
    props.icon;
});

const setLabelPosition = computed(() => {
  return !props.floatingLabel && !props.outlinedLabel ?
    `app-input-field--label-${props.labelPosition}` : '';
});

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

const clearField = () => {
  isFocused.value = false;
  emit('update:modelValue', '');
};

const showPassword = () => {
  const isTypePassword = inputType.value === 'password';
  showSecondaryIcon.value = isTypePassword;
  isTypePassword
    ? (inputType.value = 'text')
    : (inputType.value = 'password');
};

const iconAction = () => {
  if (props.type === 'password') {
    showPassword();
  } else {
    clearField();
  }
};

const configComponent = () => {
  id.value = randomId();
  isFocused.value = props.modelValue.length > 0;
};

onMounted(() => {
  configComponent();
});
</script>

<template lang="pug">
.app-input-field.form-field-wrapper(
:class="[{'is-focused': (floatingLabel || outlinedLabel) && isFocused}, setLabelPosition]")
  label.app-label(v-if="label", 
  :class="{'accesible-hidden' : !showLabel, 'label-float' : floatingLabel, 'label-outlined' : outlinedLabel}", 
  :for="id") {{ label }}
  input.app-input(
  :class="{'disabled': disabled, 'b-bottom': borderBottom, 'hide-placeholder' : floatingLabel}"
  :value="modelValue"
  :type="inputType"
  :id="id"
  :name="name"
  :placeholder="placeholder"
  :aria-label="placeholder || label"
  :aria-labelledby="ariaLabelledby"
  :disabled="disabled"
  :required="required"
  :readonly="readonly"
  :min="min"
  :max="max"
  :maxlength="maxlength"
  @input="emitValue",
  @focus="emitFocus",
  @blur="emitBlur")
  span.app-input-icon(v-if="modelValue.length && icon.length", 
  role="button",
  @click="iconAction", 
  :class="[getIcon, {'icon-float': floatingLabel || outlinedLabel}]")
</template>

<style lang="scss">
@import 'index';
</style>
