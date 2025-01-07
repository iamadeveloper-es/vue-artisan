<script lang="ts">
export default {
  name: 'va-badge-demo'
};
</script>
<script setup lang="ts">
import { ref } from 'vue';
import VaBadge from '../index.vue';
import VaIconSvg from '../../va-icon-svg/index.vue';
import VaButton from '../../../molecules/app-button/index.vue';

const badgeCount1 = ref(9);
const badgeCount2 = ref(78);

const increment = () => {
  badgeCount1.value++;
};

const increment2 = () => {
  badgeCount2.value++;
};

</script>

<template>
<div class="va-badge-demo-flex">
  <div class="va-badge-demo-item">
    <h4>Default</h4>
    <VaBadge :count="badgeCount1">
      <template #content>
        <VaIconSvg
          icon="envelope"
          size="25px"
          color="primary"
        />
      </template>
    </VaBadge>
    <div>
      <VaButton
        @clicked="increment"
        text="incrementar"
      />
    </div>
  </div>
  <div class="va-badge-demo-item">
    <h4>Prop 'position' = 'bottom-right'</h4>
    <VaBadge
      :count="badgeCount2"
      position="bottom-right"
    >
      <template #content>
        <VaIconSvg
          icon="envelope"
          size="25px"
          color="primary"
        />
      </template>
    </VaBadge>
    <div>
      <VaButton
        @clicked="increment2"
        text="incrementar"
      />
    </div>
  </div>
  <div class="va-badge-demo-item">
    <h4>Prop 'hideCount' = true</h4>
    <VaBadge
      :count="badgeCount2"
      :hideCount="true"
    >
      <template #content>
        <VaIconSvg
          icon="envelope"
          size="25px"
          color="primary"
        />
      </template>
    </VaBadge>
  </div>
</div>
</template>

<style lang="scss" scoped>
.va-badge-demo-flex{
  display: flex;
}
.va-badge-demo-item{
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
