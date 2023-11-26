<script lang="ts">
import { computed, ref } from 'vue';
// import AppIcon from '../../atoms/app-icon/index.vue';
import AppButton from '../app-button/index.vue';

export default {
  name: 'app-custom-select',
  components: {
    AppButton,
    // AppIcon
  },
  props: {
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
  },
  setup (props, context) {
    const show = ref(false);

    const getIcon = computed(() => {
      const icon = props.icon;
      const defaultIcon = ['fa-solid', 'fa-chevron-down'];
      return icon?.length ? icon : defaultIcon;
    });

    const iconClass = computed(() => {
      return show.value ? 'collapse-open' : 'collapse-close';
    });

    const emitValue = (ev: Event) => {
      const target = ev.target as HTMLInputElement;
      context.emit('update:modelValue', target.value);
      context.emit('onChange', ev);
    };

    const emitFocus = (ev: Event) => {
      context.emit('onFocus', ev);
    };

    const emitBlur = (ev: Event) => {
      context.emit('onBlur', ev);
    };

    const toggleOptions = () => {
      show.value = !show.value;
    };

    const hide = () => {
      show.value = false;
    };

    return {
      show,
      getIcon,
      iconClass,
      emitValue,
      emitFocus,
      emitBlur,
      toggleOptions,
      hide
    };
  }
};
</script>

<template lang="pug">
.app-custom-select(v-click-outside="hide")
    span.app-label(
    role="label", 
    :class="{'label-float': floatingLabel, 'is-focused' : modelValue && floatingLabel || modelValue && outlinedLabel, 'label-outlined' : outlinedLabel}") {{ label }}
    app-button.app-input(
    @clicked="toggleOptions", 
    :text="modelValue",
    :cClass="[{'b-bottom': borderBottom}, iconClass]" ,
    :icon="getIcon", 
    :iconSize="iconSize", 
    :disableRipple="true")
    ol(v-show="show", 
    class="app-custom-select__options", 
    role="listbox", 
    :tabindex="show ? -1 : 0")
        li.app-custom-select__li(
        v-for="(option, index) in options", 
        :key="index", 
        role="option", 
        :aria-labelledby="`list-item-${index}`", 
        @keyup.enter="toggleOptions")
            input.app-custom-select__input(
            aria-hidden="true", 
            role="radio", 
            type="radio", 
            :id="`list-item-${index}`", 
            :name="inputName", 
            :disabled="option.disabled", 
            :hidden="option.disabled", 
            :value="option.value", 
            @change="emitValue($event)", 
            @focus="onFocus", 
            @blur="emitBlur")
            label.app-custom-select__label(
            :for="`list-item-${index}`") {{option.label}}
</template>

<style lang="scss">
@import 'index';
</style>
