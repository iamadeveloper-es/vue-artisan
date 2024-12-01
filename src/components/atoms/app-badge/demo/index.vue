<script lang="ts">
export default {
  name: 'app-badge-demo'
};
</script>
<script setup lang="ts">
import { ref } from 'vue';
import AppBadge from '../index.vue';
import AppIcon from '../../app-icon/index.vue';
import AppButton from '../../../molecules/app-button/index.vue';

const badgeCount = ref(98);

const increment = () => {
  badgeCount.value++;
};

</script>

<template lang="pug">
app-badge(:count="badgeCount")
  template(#content)
    app-icon(
      :icon="['fa-solid', 'fa-image']",
      size="25"
      variant="primary")
div
  app-button(
    @clicked="increment",
    text="incrementar", )
</template>

<style lang="scss">
.app-button{
  margin-top: 2em;
}
</style>
