<script lang="ts">
export default {
  name: 'app-rating-demo'
};
</script>

<script lang="ts" setup>
import AppRating from '../index.vue';

const handleValue = (ev) => {
  console.log(ev);
};
</script>

<template lang="pug">
.app-rating-demo
  .app-rating-demo__item
    h4 Default
    app-rating(@clicked="handleValue", currentSelection="3")
  .app-rating-demo__item
    h4 Disabled
    app-rating(@clicked="handleValue", currentSelection="1", readOnly="true")
  .app-rating-demo__item
    h4 Otros iconos
    app-rating(@clicked="handleValue", :icon="['fa-regular', 'fa-heart']", :iconOnActive="['fa-solid', 'fa-heart']", colorActive="danger")
</template>

<style lang="scss">
.app-rating-demo{

  &__item{
    // margin-bottom: 2em;
  }
}
</style>