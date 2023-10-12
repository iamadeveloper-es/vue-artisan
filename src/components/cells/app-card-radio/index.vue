<script lang="ts">
import { computed } from 'vue';

export default {
  name: 'app-card-radio',
  props: {
    modelValue: {
      default: '',
      required: true
    },
    value: {
      type: [String, Number, Boolean, Array],
      default: false
    },
    name: {
      type: String,
      default: 'card-radio-name'
    },
  },
  setup (props, context){
    const isChecked = computed(() => {
      return props.modelValue === props.value;
    });

    const emitValue = (ev: Event) => {
      const target = ev.target as HTMLInputElement;
      context.emit('update:modelValue', target.value);
      context.emit('onChange', ev);
    };

    return {
      isChecked, 
      emitValue
    };
  }
};
</script>

<template lang="pug">
.app-card-radio(:class="{'active': isChecked}")
  input.app-card-radio__input(type="radio", 
  :value="value", 
  :name="name",
  :checked="isChecked" 
  @change="emitValue($event)")
  slot(name="content")

</template>

<style lang="scss">
@import 'index';
</style>