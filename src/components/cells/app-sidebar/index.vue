<script lang="ts">
export default {
  name: 'app-sidebar'
};
</script>
<script setup lang="ts">

defineProps({
  show: {
    type: Boolean,
    default: false
  },
  showLeft: {
    type: Boolean,
    default: true
  }
});

</script>

<template lang="pug">
.app-sidebar(:class="{ 'show': show, 'show-left' : showLeft, 'show-right' : !showLeft}")
    slot(name="sidebarContent")
</template>

<style lang="scss">
@import 'index';
</style>