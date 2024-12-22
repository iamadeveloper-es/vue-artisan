<script lang="ts">
export default {
  name: 'app-badge-demo'
};
</script>
<script setup lang="ts">
import { ref } from 'vue';
import AppBadge from '../index.vue';
import AppIconSvg from '../../app-icon-svg/index.vue';
import AppButton from '../../../molecules/app-button/index.vue';

const badgeCount1 = ref(9);
const badgeCount2 = ref(78);

const increment = () => {
  badgeCount1.value++;
};

const increment2 = () => {
  badgeCount2.value++;
};

</script>

<template lang="pug">
.app-badge-demo-flex
  .app-badge-demo-item
    h4 Default
    app-badge(:count="badgeCount1")
      template(#content)
        app-icon-svg(
          icon="envelope",
          size="25px",
          color="primary")
    div
      app-button(
        @clicked="increment",
        text="incrementar")
  .app-badge-demo-item
    h4 Prop 'position' = 'bottom-right'
    app-badge(
      :count="badgeCount2",
      position="bottom-right")
      template(#content)
        app-icon-svg(
          icon="envelope",
          size="25px",
          color="primary")
    div
      app-button(
        @clicked="increment2",
        text="incrementar")
  .app-badge-demo-item
    h4 Prop 'hideCount' = true
    app-badge(
      :count="badgeCount2",
      hideCount="true")
      template(#content)
        app-icon-svg(
          icon="envelope",
          size="25px",
          color="primary")
</template>

<style lang="scss" scoped>
.app-badge-demo-flex{
  display: flex;
}
.app-badge-demo-item{
  border-right: 1px solid;
  padding-left: 1em;
  padding-right: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  &:first-of-type{
    padding-left: 0;
    
  }
  &:last-of-type{
    border-right: none;
  }
}
.app-button{
  margin-top: 2em;
}
</style>
