<script lang="ts">
import { onMounted, ref } from 'vue';
import { useComponentFunctions } from '../../../composables/component-functions';

export default {
  name: 'app-select',
  props: {
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
  },
  setup (props, context) {
    const { randomId } = useComponentFunctions();
    const id = ref('');

    const emitValue = (ev) => {
      context.emit('update:modelValue', ev.target.value);
    };

    const configComponent = () => {
      id.value = randomId();
    };

    onMounted(() => {
      configComponent();
    });

    return {
      id,
      emitValue
    };
  }
};
</script>

<template lang="pug">
.app-select.form-field-wrapper(
:class="{'is-focused': outlinedLabel || floatingLabel}"
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
        :key="option", 
        :value="option.value"
        :selected="option.selected"
        :disabled="option.disabled"
        ) {{ option.text }}
    label.app-label(
    :for="id",
    :class="{ 'label-float': floatingLabel, 'label-outlined' : outlinedLabel, 'label-disabled': disabled}"
    ) {{ label }}
</template>

<style lang="scss">
@import 'index';
</style>
