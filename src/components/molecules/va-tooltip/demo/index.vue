<script lang="ts" setup>
import VaTooltip from '../index.vue';
import VaButton from '../../va-button/index.vue';
defineOptions({
  name: 'va-tooltip-demo'
});

// const tooltipContent = 'Soy un Tooltip, da igual el contenido que me pongas';
const tooltipContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima necessitatibus consequatur dolorem, illum facilis obcaecati ab minus sit architecto odio recusandae fugiat perferendis voluptatibus possimus nobis doloribus molestiae deleniti culpa.';
</script>

<template>
  <div class="va-tooltip-demo">
    <VaTooltip
    :content="tooltipContent"
    >
      <template #content>
        <VaButton
        text="button"
        variant="big"
        />
      </template>
    </VaTooltip>
  </div>
</template>

<style lang="scss">

</style>
