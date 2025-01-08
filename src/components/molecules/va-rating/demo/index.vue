<script lang="ts">
export default {
  name: 'va-rating-demo'
};
</script>

<script lang="ts" setup>
import VaRating from '../index.vue';

const handleValue = (ev) => {
  console.log(ev);
};
</script>

<template>
<div class="va-rating-demo">
  <div class="va-rating-demo__item">
    <h4>Default</h4>
    <VaRating
    @clicked="handleValue"
    :currentSelection="3"
    />
  </div>
  <div class="va-rating-demo__item">
    <h4>Disabled</h4>
    <VaRating
    @clicked="handleValue"
    :currentSelection="1"
    :readOnly="true"
    />
  </div>
  <div class="va-rating-demo__item">
    <h4>Otros iconos</h4>
    <VaRating
    @clicked="handleValue"
    :icon="['fa-regular', 'fa-heart']"
    :iconOnActive="['fa-solid', 'fa-heart']"
    colorActive="va-danger"
    />
  </div>
</div>
</template>

<style lang="scss">
.va-rating-demo{

  &__item{
    // margin-bottom: 2em;
  }
}
</style>
