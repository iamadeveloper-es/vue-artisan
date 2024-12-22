<script lang="ts">
export default {
  name: 'app-bottom-bar'
};
</script>
<script setup lang="ts">
import AppSvg from '../../atoms/app-svg/index.vue';
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

<template lang="pug">
nav.app-bottom-nav
    ul.app-bottom-nav__list
        li.app-bottom-nav__item(v-for="(item, index) in links" :key="index")
            //- router-link.app-bottom-nav__link(:to="item.route") {{ item.label }}
            button.app-bottom-nav__action(@click="emitEvent")
              .app-bottom-nav__action-inner
                app-svg(:name="item.icon", fill="red", stroke="blue", width="15")
                span {{ item.label }}

</template>

<style lang="scss">
@use 'index';
</style>