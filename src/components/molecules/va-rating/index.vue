<script lang="ts">
export default {
  name: 'va-rating'
};
</script>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import VaIcon from '../../atoms/va-icon/index.vue';

const props = defineProps({
  ratingCount: {
    type: Number,
    default: 5
  },
  readOnly: {
    type: Boolean,
    default: false
  },
  currentSelection: {
    type: Number,
    default: 0
  },
  icon: {
    type: [String, Array],
    default: () => ['fa-regular', 'fa-star']
  },
  iconOnActive: {
    type: [String, Array],
    default: () => ['fa-solid', 'fa-star']
  },
  color: {
    type: String,
    default: 'va-neutral-800'
  },
  colorActive: {
    type: String,
    default: 'va-warning'
  },
  hasSecondaryIcon: {
    type: Boolean,
    default: false
  }
});
const emit = defineEmits(['clicked']);
const selected = ref(props.currentSelection);
const itemSelected = reactive({
  id: undefined
});

const emitValue = (index: number) => {
  if(!props.readOnly){
    selected.value = index + 1;
    const percentage = Math.round(((index + 1) * 100 ) / props.ratingCount).toFixed(2);
    const payload = {
      selected: index + 1,
      count: Number(percentage)
    };
    emit('clicked', payload);
  }
};

// const setIconOnActive = computed(() => {
//   return props.iconOnActive && props.iconOnActive.length && props.hasSecondaryIcon ? props.iconOnActive : props.icon;
// });

</script>

<template>
<div
class="va-rating"
:class="{ 'disabled': readOnly }"
:style="[`--icon-color:var(--${color})`, `--icon-color-active:var(--${colorActive})`]"
>
  <div
    class="va-rating__item"
    v-for="(item, index) in ratingCount"
    :key="index"
    @click="emitValue(index)"
    @mouseover="readOnly ? itemSelected.id = undefined : itemSelected.id = index"
    @mouseleave="itemSelected.id = undefined"
    :data-id="index"
    :class="{ 'active': index < selected || index <= itemSelected.id}"
  >
    <VaIcon :icon="index < selected || index <= itemSelected.id ? iconOnActive : icon"/>
  </div>
</div>
</template>

<style lang="scss">
@use 'index';
</style>
