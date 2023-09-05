<script lang="ts">
import { computed, ref } from 'vue'
import AppIcon from '../../atoms/app-icon/index.vue'
import { useComponentFunctions } from '../../../composables/component-functions'

export default {
  name: 'app-button',
  components: {AppIcon},
  props: {
    text: {
      type: String,
      default: 'Button'
    },
    type:{
        type: String,
        default: 'button'
    },
    cClass: {
        type: [Array, String],
    },
    variant: {
        type: [Array, String],
        default: 'regular'
    },
    disabled:{
        type: Boolean,
        default: false
    },
    icon: {
        type: [Array, String]
    },
    iconSize: {
        type: Number,
        default: 20
    },
    iconVariant: {
        type: String,
    }
  },
  setup(props, context){
    const {rippleEffect} = useComponentFunctions()
    const button = ref(null)

    const hasIcon = computed(() => {
      return props.icon?.length
    })

    const getVariant = computed(() => {
      const variant = props.variant
      return Array.isArray(variant) ? 
      variant.map(item => `app-button--${item} `)
      : `app-button--${variant}`
    })

    const emitEvent = (ev: Event): void => {
        rippleEffect(ev, button.value)
        context.emit('clicked', ev)
    }

    return{
        button,
        hasIcon,
        getVariant,
        emitEvent
    }
  }
}
</script>

<template lang="pug">
button.app-button(
  ref="button"
  :type="type", 
  :class="cClass, getVariant", 
  :disabled="disabled", 
  @click="emitEvent")
    span.app-button--pointers-none {{ text }}
    app-icon(
    v-if="hasIcon",
    :icon="icon",
    :size="iconSize", 
    :variant="iconVariant")
</template>

<style lang="scss">
@import 'index';
</style>