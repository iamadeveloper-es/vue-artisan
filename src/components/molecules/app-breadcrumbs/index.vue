<script lang="ts">
export default {
  name: 'app-breadcrumbs',
  props: {
    items: {
      type: Array,
      required: true
    },
    divider: {
      type: String,
      default: '/'
    }
  },
  setup () {}
};
</script>

<template lang="pug">
ol.app-breadcrumbs
    li.app-breadcrumbs__li(v-for="(item, index) in items", 
    :key="index", 
    :class="{ 'app-breadcrumbs--disabled': !item.active }")
      span.app-breadcrumbs__link.disabled(v-if="!item.active") {{ item.text }}
      router-link.app-breadcrumbs__link(v-else, 
      :disabled="!item.active", 
      :to="item.route") {{ item.text }}
      span.app-breadcrumbs__divider(v-if="index !== items.length - 1") {{ divider }}
</template>

<style lang="scss">
@import 'index';
</style>
