<script lang="ts">
export default {
  name: 'va-stepper'
};
</script>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import VaButton from '../../molecules/va-button/index.vue';

const props = defineProps({
  steps: {
    type: Array,
    required: true
  },
  labelDirection: {
    type: String,
    default: 'top'
  },
  isProccessCompleted: {
    type: Boolean,
    default: false
  }
});
const ol = ref(null);

const setProgressSize = computed(() => {
  const filterCompleted = props.steps.filter(item => item.completed).length;
  const percent = filterCompleted === props.steps.length ? 100 : (100 * filterCompleted) / (props.steps.length - 1);
  return percent;
});

const lastIndex = computed(() => {
  const lastCompleted = props.steps.map((step, index) => {
    return {
      ...step,
      id: index
    };
  }).reverse().find(step => step.completed);
  return lastCompleted ? props.steps.map((step, index) => {
    return {
      ...step,
      id: index
    };
  }).findIndex(step => step.id === lastCompleted.id) : undefined;

});

const filterdSteps = computed(() => {
  updateProgress();
  return props.steps.map((step, index) => {
    return {
      ...step,
      id: index,
      active: lastIndex.value !== undefined ? index === lastIndex.value + 1 : index === 0
    };
  });
});

const setIcon = (step) => {
  return step.icon && !step.completed && !props.isProccessCompleted ?
    step.icon.onEdit : step.icon && step.completed || step.icon && props.isProccessCompleted ?
      step.icon.onClomplete :
      [];
};

// const isDisabled = (step) => {
//   return step.completed && !step.active || !step.completed && !step.active;
// };

const isDisabled = (step) => {
  return !step.completed && !step.active;
};

const emit = defineEmits(['clicked']);

const emitEvent = (index) => {
  emit('clicked', index);
};

const updateProgress = () => {
  ol.value?.style.setProperty('--stepper-progress-size', `${props.isProccessCompleted ? 100 : setProgressSize.value}%`);
};

const configComponent = () => {
  updateProgress();
};

onMounted(() => {
  configComponent();
});
</script>

<template>
<div class="va-stepper-wrapper">
  <ol class="va-stepper" ref="ol">
    <li class="va-stepper__item" v-for="(step, index) in filterdSteps" :key="index"><span class="va-stepper__label" :class="labelDirection">{{ step.label }}</span>
      <va-button
      @clicked="emitEvent(index)"
      :text="step.text"
      :disabled="isDisabled(step) || isProccessCompleted"
      :cClass="['va-stepper__action', {'completed' : step.completed || isProccessCompleted, 'active' : step.active && !isProccessCompleted}]" :icon="setIcon(step)" :iconSize="12"></va-button>
    </li>
  </ol>
  <TransitionGroup name="slide-fade">
    <slot name="stepperContent"></slot>
  </TransitionGroup>
</div>
</template>

<style lang="scss">
@import 'index';
</style>
