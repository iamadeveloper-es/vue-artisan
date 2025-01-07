<script lang="ts">
export default {
  name: 'va-skeleton-demo'
};
</script>

<script lang="ts" setup>
import vaSkeleton from '../index.vue';
</script>

<template>
<div class="va-skeleton-demo">
  <h4>Animación "wave" por defecto</h4>
  <div class="va-skeleton-demo__wrapper">
    <div class="item" v-for="(item, index) in 3" :key="index">
      <va-skeleton></va-skeleton>
      <va-skeleton sWidth="65%"></va-skeleton>
      <va-skeleton sWidth="70%"></va-skeleton>
      <div class="flex">
        <va-skeleton variant="circle" :sWidth="'30px'" :sHeight="'30px'"></va-skeleton>
        <va-skeleton sWidth="80px"></va-skeleton>
      </div>
      <va-skeleton sHeight="150px"></va-skeleton>
    </div>
  </div>
  <h4>Animación "pulse" y border-radius</h4>
  <div class="va-skeleton-demo__wrapper">
    <div class="item" v-for="(item, index) in 3" :key="index">
      <va-skeleton sHeight="150px" animation="pulse" bRadius="5px"></va-skeleton>
      <div class="flex">
        <va-skeleton variant="circle" :sWidth="'30px'" :sHeight="'30px'" animation="pulse"></va-skeleton>
        <va-skeleton sWidth="80px" animation="pulse" bRadius="5px"></va-skeleton>
      </div>
      <va-skeleton sWidth="48%" animation="pulse" bRadius="5px"></va-skeleton>
      <va-skeleton animation="pulse" bRadius="5px"></va-skeleton>
    </div>
  </div>
</div>
</template>

<style lang="scss">
.va-skeleton-demo{
  .flex{
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .va-skeleton{
    margin-bottom: 10px;
  }

  &__wrapper{
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    margin-bottom: 2em;
    // justify-content: space-between;
  }

  .item{
    flex-grow: 1;
    max-width: 300px;
    padding: 15px;
    border-radius: 3px;
    border: 1px solid var(--va-neutral-600);
    border-radius: 5px;
  }
}
</style>
