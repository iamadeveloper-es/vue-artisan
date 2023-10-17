<script lang="ts">
import { computed, onMounted, ref } from 'vue';
import AppButton from '../../molecules/app-button/index.vue';

export default {
  name: 'app-stepper',
  components: {AppButton},
  props: {
    steps: {
      type: Array,
      required: true
    },
    labelDirection: {
      type: String,
      default: 'top'
    }
  },
  setup (props, context){
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
      return step.icon && !step.completed ? 
        step.icon.onEdit : step.icon && step.completed ? 
          step.icon.onClomplete : 
          [];
    };

    const isDisabled = (step) => {
      return step.completed && !step.active || !step.completed && !step.active;
    };

    const emitEvent = (index) => {
      context.emit('clicked', index);
    };

    const updateProgress = () => {
      ol.value?.style.setProperty('--stepper-progress-size', `${setProgressSize.value}%`);
    };

    const configComponent = () => {
      updateProgress();
    };

    onMounted(() => {
      configComponent();
    });

    return{
      ol,
      filterdSteps,
      setIcon, 
      isDisabled, 
      emitEvent
    };
  }
};
</script>

<template lang="pug">
.app-stepper-wrapper
  ol.app-stepper(ref="ol")
    li.app-stepper__item(v-for="(step, index) in filterdSteps", 
    :key="index")
      span.app-stepper__label(:class="labelDirection") {{ step.label }}
      app-button(@clicked="emitEvent(index)", 
      :text="step.text", 
      :disabled="isDisabled(step)", 
      :cClass="['app-stepper__action', {'completed' : step.completed, 'active' : step.active}]", 
      :icon="setIcon(step)"
      :iconSize="12")
  TransitionGroup(name="slide-fade")
    slot(name="stepperContent")
</template>

<style lang="scss">
@import 'index';
</style>