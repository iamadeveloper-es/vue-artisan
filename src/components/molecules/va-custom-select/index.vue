<script lang="ts">
export default {
  name: 'va-custom-select'
};
</script>
<script setup lang="ts">
import { computed, ref } from 'vue';
// import AppIcon from '../../atoms/va-icon/index.vue';
import VaButton from '../va-button/index.vue';

const props = defineProps({
  modelValue: {
    type: String
  },
  options: {
    type: Array,
    required: true
  },
  label: {
    type: String,
    default: 'Selecciona una opción'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  inputName: {
    type: String,
    required: true
  },
  floatingLabel: {
    type: Boolean,
    default: false
  },
  outlinedLabel: {
    type: Boolean,
    default: false
  },
  borderBottom: {
    type: Boolean,
    default: false
  },
  icon: {
    type: [Array, String]
  },
  iconSize: {
    type: Number,
    default: 15
  }
});
const show = ref(false);

const getIcon = computed(() => {
  const icon = props.icon;
  const defaultIcon = ['fa-solid', 'fa-chevron-down'];
  return icon?.length ? icon : defaultIcon;
});

const iconClass = computed(() => {
  return show.value ? 'collapse-open' : 'collapse-close';
});

const emit = defineEmits(['update:modelValue', 'onChange', 'onFocus', 'onBlur']);

const emitValue = (ev: Event) => {
  const target = ev.target as HTMLInputElement;
  emit('update:modelValue', target.value);
  emit('onChange', ev);
};

const emitFocus = (ev: Event) => {
  emit('onFocus', ev);
};

const emitBlur = (ev: Event) => {
  emit('onBlur', ev);
};

const toggleOptions = () => {
  show.value = !show.value;
};

const hide = () => {
  show.value = false;
};
</script>

<template>
<div
class="va-custom-select"
v-click-outside="hide"
>
  <span
  class="va-label"
  role="label"
  :class="[{'label-float': floatingLabel, 'is-focused' : modelValue && floatingLabel || modelValue && outlinedLabel, 'label-outlined' : outlinedLabel}]"
  >{{ label }}</span>
  <VaButton
    @clicked="toggleOptions"
    :text="modelValue"
    :cClass="['va-input', {'b-bottom': borderBottom}, iconClass]"
    :icon="getIcon"
    :iconSize="iconSize"
    :disableRipple="true"
  />
  <ol
    v-show="show"
    class="va-custom-select__options"
    role="listbox"
    :tabindex="show ? -1 : 0"
  >
    <li
      class="va-custom-select__li"
      v-for="(option, index) in options"
      :key="index"
      role="option"
      :aria-labelledby="`list-item-${index}`"
      @keyup.enter="toggleOptions"
    >
      <input
        class="va-custom-select__input"
        aria-hidden="true"
        role="radio"
        type="radio"
        :id="`list-item-${index}`"
        :name="inputName"
        :disabled="option.disabled"
        :hidden="option.disabled"
        :value="option.value"
        @change="emitValue($event)"
        @focus="emitFocus"
        @blur="emitBlur"
      >
      <label
        class="va-custom-select__label"
        :for="`list-item-${index}`"
      >{{ option.label }}</label>
    </li>
  </ol>
</div>
<!-- .va-custom-select(v-click-outside="hide")
    span.va-label(
    role="label",
    :class="[{'label-float': floatingLabel, 'is-focused' : modelValue && floatingLabel || modelValue && outlinedLabel, 'label-outlined' : outlinedLabel}]") {{ label }}
    va-button.va-input(
    @clicked="toggleOptions",
    :text="modelValue",
    :cClass="[{'b-bottom': borderBottom}, iconClass]",
    :icon="getIcon",
    :iconSize="iconSize",
    :disableRipple="true")
    ol(v-show="show",
    class="va-custom-select__options",
    role="listbox",
    :tabindex="show ? -1 : 0")
        li.va-custom-select__li(
        v-for="(option, index) in options",
        :key="index",
        role="option",
        :aria-labelledby="`list-item-${index}`",
        @keyup.enter="toggleOptions")
            input.va-custom-select__input(
            aria-hidden="true",
            role="radio",
            type="radio",
            :id="`list-item-${index}`",
            :name="inputName",
            :disabled="option.disabled",
            :hidden="option.disabled",
            :value="option.value",
            @change="emitValue($event)",
            @focus="emitFocus",
            @blur="emitBlur")
            label.va-custom-select__label(
            :for="`list-item-${index}`") {{option.label}} -->
</template>

<style lang="scss">
@import 'index';
</style>
