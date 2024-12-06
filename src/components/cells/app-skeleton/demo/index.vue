<script lang="ts">
export default {
  name: 'app-skeleton-demo'
};
</script>

<script lang="ts" setup>
import AppSkeleton from '../index.vue';
</script>

<template lang="pug">
.app-skeleton-demo
  h4 Animación "wave" por defecto
  .app-skeleton-demo__wrapper
    .item(v-for="(item, index) in 3" :key="index")
      app-skeleton
      app-skeleton(sWidth="65%")
      app-skeleton(sWidth="70%")
      .flex
        app-skeleton(
          variant="circle",
          :sWidth="'30px'",
          :sHeight="'30px'")
        app-skeleton(sWidth="80px")
      app-skeleton(sHeight="150px")
  h4 Animación "pulse" y border-radius
  .app-skeleton-demo__wrapper
    .item(v-for="(item, index) in 3" :key="index")
      app-skeleton(sHeight="150px", animation="pulse", bRadius="5px")
      .flex
        app-skeleton(
          variant="circle",
          :sWidth="'30px'",
          :sHeight="'30px'",
          animation="pulse")
        app-skeleton(sWidth="80px", animation="pulse", bRadius="5px")
      app-skeleton(sWidth="48%", animation="pulse", bRadius="5px")
      app-skeleton(animation="pulse", bRadius="5px")
</template>

<style lang="scss">
.app-skeleton-demo{
  .flex{
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .app-skeleton{
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
    border: 1px solid var(--neutral-600);
    border-radius: 5px;
  }
}
</style>