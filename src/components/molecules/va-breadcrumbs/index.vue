<script lang="ts">
export default {
  name: 'va-breadcrumbs'
};
</script>
<script setup lang="ts">

defineProps({
  items: {
    type: Array,
    required: true
  },
  divider: {
    type: String,
    default: '/'
  }
});

</script>

<template>
<ol class="va-breadcrumbs">
  <li
    class="va-breadcrumbs__li"
    v-for="(item, index) in items"
    :key="index"
    :class="{ 'va-breadcrumbs--disabled': !item.active }"
  >
    <span
      class="va-breadcrumbs__link disabled"
      v-if="!item.active"
    >
      {{ item.text }}
    </span>
    <router-link
      class="va-breadcrumbs__link"
      v-else,
      :disabled="!item.active"
      :to="item.route"
    >{{ item.text }}
    </router-link>
    <span
      class="va-breadcrumbs__divider"
      v-if="index !== items.length - 1"
      >{{ divider }}</span>
  </li>
</ol>
</template>

<style lang="scss">
@import 'index';
</style>
