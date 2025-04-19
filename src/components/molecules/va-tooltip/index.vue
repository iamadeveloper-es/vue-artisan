<script lang="ts" setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref, useSlots, watch, type PropType } from 'vue';

type TooltipPositions = 'top' | 'bottom' | 'left' | 'right'

defineOptions({
  name: 'va-tooltip'
});

const props = defineProps({
  content: {
    type: String,
    required: true
  },
  position: {
    type: String as PropType<TooltipPositions>,
    default: 'top'
  }
});

const availableValues = ['top', 'bottom', 'left', 'right'];
const slot = useSlots();
const trigger = ref<HTMLElement | null>(null);
const tooltip = ref<HTMLElement | null>(null);
const showTooltip = ref(false);
const tooltipInitialPosition = ref(availableValues.includes(props.position) ? props.position : 'top');
const tooltipPosition = ref(tooltipInitialPosition);

const observer = ref(null);

const show = () => {
  showTooltip.value = true;
};

const hide = () => {
  showTooltip.value = false;
};

watch(showTooltip, async (newVal, oldVal) => {
  if(newVal === true){
    observeTrigger();
  }
});

// const checkPosition = computed(() => {
//   return availableValues.includes(props.position) ? props.position : 'top';
// });

const spaceAvobe = computed(() => {
  const tooltipHeight = tooltip.value?.getBoundingClientRect().height;
  const triggerElement = trigger.value as HTMLElement;
  const triggerTop = triggerElement.offsetTop;
  const triggerLeft = triggerElement.offsetLeft;

  return tooltipHeight > triggerTop;

});

const callback = (entries, observer) => {

  entries.forEach(entry => {
    const tooltipHeight = tooltip.value?.getBoundingClientRect().height as number;
    const tooltipWidth = tooltip.value?.getBoundingClientRect().width as number;
    const spaceAboveTop = entry.boundingClientRect.top as number;
    const spaceAboveBottom = entry.boundingClientRect.bottom as number;
    const spaceAboveLeft = entry.boundingClientRect.left as number;
    const spaceAboveRight = entry.boundingClientRect.right as number;
    if(entry.isIntersecting){
      console.log('Visible!!');


      if(['top', 'bottom'].includes(tooltipInitialPosition.value) && tooltipHeight > spaceAboveTop){
        tooltipPosition.value = 'bottom';
      }
      else{
        tooltipPosition.value = 'top'
      }
      // else if(['left', 'right'].includes(tooltipInitialPosition.value)){
      //   tooltipPosition.value = 'top';
      // }
    }
    // else{
    //   console.log('No se ve!!!');
    //   if(tooltipHeight > spaceAboveTop){
    //     tooltipPosition.value = 'bottom';
    //   }
    //   else{
    //     tooltipPosition.value = 'top';
    //   }
    // }
  });
};

const observeTrigger = () => {
  const observer = new IntersectionObserver(callback, {
    root: document,
    rootMargin: '0px',
    threshold: 0
  });

  observer.observe(trigger.value);
};

onMounted(() => {
  observeTrigger();
});


</script>

<template>
  <div class="va-tooltip"
  ref="trigger"
  :class="[{'active': showTooltip}, `va-tooltip--${tooltipPosition}`]"
  @mouseover="show"
  @mouseleave="hide">
    <div class="va-tooltip__content"
    ref="tooltip">{{ content }}</div>
    <slot name="content"></slot>
  </div>
</template>

<style lang="scss">
@use 'index';
</style>
