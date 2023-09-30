<script lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useComponentFunctions } from '../../../composables/component-functions';

export default {
  name: 'app-checkbox',
  props: {
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
    label: {
      type: String,
      default: 'Checkbox label'
    },
    cClass: {
      type: [String, Array]
    },
    activeColor: {
      type: String,
      default: 'primary'
    }
  },
  setup (props, context) {
    const { randomId } = useComponentFunctions();
    const id = ref('');

    const isActive = ref(false);

    const setActiveColor = computed(() => {
      return `app-check-radio__icon--${props.activeColor}`;
    });

    const hasSlot = computed(() => {
      return !!context.slots['label'];
    });

    const emitValue = (ev: Event) => {
      const target = ev.target as HTMLInputElement;
      context.emit('update:modelValue', target.value);
      context.emit('onChange', ev);
    };

    const configComponent = () => {
      id.value = randomId();
    };

    onMounted(() => {
      configComponent();
    });

    return {
      id,
      isActive,
      setActiveColor,
      hasSlot,
      emitValue
    };
  }
};
</script>

<template lang="pug">
.app-check-radio.app-checkbox(
:class="{'disabled': disabled}" 
:ref="id")
    .app-check-radio__wrapper
        span.app-check-radio__icon( ria-hidden="true", :class="modelValue?.status ? setActiveColor : ''")
            svg.v-icon__svg(xmlns="http://www.w3.org/2000/svg", viewBox="0 0 24 24", role="img", aria-hidden="true")
                path(v-if="!modelValue?.status", d="M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z")
                path(v-else, d="M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3Z")
        input.app-check-radio__input(
        :aria-checked="modelValue?.status" 
        :id="id" 
        :disabled="disabled"
        :checked="modelValue?.status"
        role="checkbox" 
        type="checkbox" 
        :value="modelValue"
        @change="emitValue($event)")
    label.app-check-radio__label(:for="id") 
        span(v-if="!hasSlot") {{label}}
        slot(v-else, name="label")
</template>

<style lang="scss">
@import 'index';
</style>
