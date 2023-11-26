<script lang="ts">
export default {
    name: 'app-card-radio'
};
</script>
<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
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
    }
});
const isChecked = computed(() => {
    return props.modelValue === props.value;
});
  
const emit = defineEmits(['update:modelValue', 'onChange']);
const emitValue = (ev: Event) => {
    const target = ev.target as HTMLInputElement;
    emit('update:modelValue', target.value);
    emit('onChange', ev);
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