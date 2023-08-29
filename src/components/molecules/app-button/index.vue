<script lang="ts">

export default {
  name: 'app-button',
  props: {
    text: {
      type: String,
      default: 'Button'
    }
  },
  setup(props, context){
    const emitEvent = (ev: Event) => {
        context.emit('clicked', ev)
    }
    return{
        emitEvent
    }
  }
}
</script>

<template lang="pug">
button.app-button(@click="emitEvent")
    span {{ text }}
</template>