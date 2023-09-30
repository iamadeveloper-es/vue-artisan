<script lang="ts">
import { onMounted, ref } from 'vue';
import { useComponentFunctions } from '../../../composables/component-functions';

export default {
  name: 'app-textarea',
  props: {
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
    }
  },
  setup (props, context) {
    const { randomId } = useComponentFunctions();
    const isFocused = ref(false);
    const id = ref('');

    const emitValue = (ev: Event) => {
      const target = ev.target as HTMLInputElement;
      context.emit('update:modelValue', target.value);
    };

    const emitFocus = (ev: FocusEvent) => {
      isFocused.value = true;
      context.emit('onFocus', ev);
    };

    const emitBlur = (ev: FocusEvent) => {
      isFocused.value = props.modelValue.length > 0 ? true : false;
      context.emit('onBlur', ev);
    };

    const configComponent = () => {
      id.value = randomId();
      isFocused.value = props.modelValue.length > 0;
    };

    onMounted(() => {
      configComponent();
    });

    return {
      id,
      isFocused,
      emitValue,
      emitFocus,
      emitBlur
    };
  }
};
</script>

<template lang="pug">
.app-textarea.form-field-wrapper(:class="{'is-focused': (floatingLabel || outlinedLabel) && isFocused}")
    textarea.app-input(
    :class="{'b-bottom': borderBottom, 'disabled': disabled}",
    :rows="rows",
    :maxLength="maxLength",
    :minLength="minLength",
    :disabled="disabled",
    :placeholder="placeholder",
    :required="required",
    :readonly="readOnly",
    :aria-label="placeholder || label",
    :aria-labelledby="ariaLabelledby",
    :id="id"
    :name="name"
    :value="modelValue"
    aria-placeholder="dsf",
    @input="emitValue",
    @focus="emitFocus",
    @blur="emitBlur")
    label.app-label(
    :class="{'label-float' : floatingLabel, 'label-outlined' : outlinedLabel, 'label-disabled': disabled}"
    :for="id") {{ label }}
</template>

<style lang="scss">
@import 'index';
</style>
