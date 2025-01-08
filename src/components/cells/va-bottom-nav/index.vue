<script lang="ts">
export default {
  name: 'va-bottom-bar'
};
</script>
<script setup lang="ts">
import VaSvg from '../../atoms/va-svg/index.vue';
import { useComponentFunctions } from '@/composables/component-functions';
import { ref, type PropType } from 'vue';

type LinkType = {
    route: string,
    label: string,
    external: boolean,
    icon: string
}
const props = defineProps({
  links: {
    type: Array as PropType<LinkType[]>,
    required: true
  }
});

const emit = defineEmits(['clicked']);
const { rippleEffect } = useComponentFunctions();
const buttonSelected = ref(null);

const emitEvent = (ev: Event): void => {
  const target = ev.target as HTMLButtonElement;
  target.classList.add('interacted');
  // debugger;
  emit('clicked', ev);
};
</script>

<template>
<nav class="va-bottom-nav">
  <ul class="va-bottom-nav__list">
    <li class="va-bottom-nav__item" v-for="(item, index) in links" :key="index">
      <button class="va-bottom-nav__action" @click="emitEvent">
        <div class="va-bottom-nav__action-inner">
          <va-svg :name="item.icon" fill="red" stroke="blue" width="15"></va-svg><span>{{ item.label }}</span>
        </div>
      </button>
    </li>
  </ul>
</nav>
</template>

<style lang="scss">
@use 'index';
</style>
