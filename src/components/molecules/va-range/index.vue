<script lang="ts">
export default {
  name: 'va-range'
};
</script>

<script setup lang="ts">
import { onMounted, type Ref, ref, computed } from 'vue';
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
    required: true
  },
  min: {
    type: Number,
    default: 0
  },
  max: {
    type: Number,
    default: 100
  },
  step: {
    type: [String, Number],
    default: ''
  },
  thumbSize: {
    type: String,
    default: 'small'
  },
  rangeHeight: {
    type: Number,
    default: 8
  },
  showOutput: {
    type: Boolean,
    default: false
  },
  outputPosition: {
    type: String,
    default: 'top'
  }
});
const { randomId } = useComponentFunctions();
const id = ref('');
const input: Ref<null> | Ref<HTMLInputElement> = ref(null) as unknown as HTMLInputElement;
const output = ref(null);
const variantSize: Object = {
  small: 2,
  medium: 6,
  big: 10
};
const variant: Ref<number> = ref(0);

const setOutputPos = computed(() => {
  return props.showOutput ? `va-range--output-${props.outputPosition}` : '';
});

const emit = defineEmits(['update:modelValue']);

const emitValue = (ev: Event) => {
  const target = ev.target as HTMLInputElement;
  emit('update:modelValue', target.value);
  if(props.showOutput){
    dynamicOutput();
  }
};

const setRangeSizes = () => {
  const rangeThumbSize = props.rangeHeight * 2 + variant.value;
  const rangePosition = (props.rangeHeight / 2) + variant.value / 2;

  if(input.value){
    input.value.style.setProperty('--range-thumb-pos', `-${rangePosition}px`);
    input.value.style.setProperty('--range-thumb-size', `${rangeThumbSize}px`);
    input.value.style.setProperty('--range-height', `${props.rangeHeight}px`);
    input.value.style.setProperty('--range-thumb-hover', `${rangeThumbSize / 2.8}px`);
    input.value.style.setProperty('--range-thumb-focus', `${rangeThumbSize / 2.1}px`);
  }

  if(props.showOutput){
    dynamicOutput();
  }
};

const dynamicOutput = () => {
  const thumbWidth = props.rangeHeight * 2 + variant.value;
  // const y = props.outputPosition;

  const off = (input.value.clientWidth - thumbWidth) / (parseInt(input.value.max) - parseInt(input.value.min));
  const px = ((input.value.valueAsNumber - parseInt(input.value.min)) * off) - (output.value.clientWidth / 2) + (thumbWidth / 1.7);

  output.value.style.left = px + 'px';
  if(props.outputPosition === 'bottom'){
    output.value.style.bottom = -input.value.offsetHeight - 5 + 'px';
  }else{
    output.value.style.top = -input.value.offsetHeight - 5 + 'px';
  }
  output.value.innerHTML = props.modelValue;
};

const configComponent = () => {
  id.value = randomId();
  variant.value = Number(variantSize[props.thumbSize]);
  setRangeSizes();
};

onMounted(() => {
  configComponent();
});

</script>

<template>
<div
class="va-range"
:class="setOutputPos"
>
  <label
    class="va-label"
    v-if="label"
    :class="'accesible-hidden'"
    :for="id"
  ></label>
  <input
    class="va-range__input"
    type="range"
    ref="input"
    :name="name"
    :id="id"
    :min="min"
    :max="max"
    :step="step"
    :value="modelValue"
    @input="emitValue"
  >
  <output
    class="va-range__output"
    v-if="showOutput"
    ref="output"
  >{{ modelValue }}</output>
</div>
</template>

<style lang="scss">
@import 'index';
</style>
