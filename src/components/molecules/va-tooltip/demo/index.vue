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
  <div class="va-tooltip-demo demo">
    <!-- Variante de tooltip -->
    <div class="variant-section">
      <h2>Tooltip</h2>
      <div class="variant-wrapper">
        <div class="flex">
          <VaTooltip
          content="Tooltip default position is 'Top'">
            <template #content>
              <VaButton
              text="Tooltip"
              variant="big"
              />
            </template>
          </VaTooltip>
        </div>
      </div>
    </div>
     <!-- Variante de posición -->
     <div class="variant-section">
      <h2>Tooltip (position)</h2>
      <div class="variant-wrapper">
        <div class="flex">
          <VaTooltip
          content="Tooltip Top"
          position="top">
            <template #content>
              <VaButton
              text="Top"
              variant="big"
              />
            </template>
          </VaTooltip>
        </div>
        <div class="flex">
          <VaTooltip
          content="Tooltip Bottom"
          position="bottom"
          >
            <template #content>
              <VaButton
              text="Bottom"
              variant="big"
              />
            </template>
          </VaTooltip>
        </div>
        <div class="flex">
          <VaTooltip
          content="Tooltip Left"
          position="left"
          >
            <template #content>
              <VaButton
              text="Left"
              variant="big"
              />
            </template>
          </VaTooltip>
        </div>
        <div class="flex">
          <VaTooltip
          content="Tooltip Right"
          position="right"
          >
            <template #content>
              <VaButton
              text="Right"
              variant="big"
              />
            </template>
          </VaTooltip>
        </div>
      </div>
    </div>
    <!-- Variante de tooltip contenido largo -->
    <div class="variant-section">
      <h2>Tooltip contenido largo</h2>
      <div class="variant-wrapper">
        <div class="flex">
          <VaTooltip
          :content="tooltipContent">
            <template #content>
              <VaButton
              text="Tooltip"
              variant="big"
              />
            </template>
          </VaTooltip>
        </div>
      </div>
    </div>
    <!-- Variante de tooltip en cualquier elemento -->
    <div class="variant-section">
      <h2>Tooltip en cualquier elemento</h2>
      <div class="variant-wrapper">
        <div class="flex">
          <VaTooltip
          :content="tooltipContent">
            <template #content>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, iure quos, vitae qui reprehenderit quis necessitatibus ipsum distinctio in amet maxime. Quidem quasi sequi alias expedita beatae placeat itaque! Accusantium.</p>
            </template>
          </VaTooltip>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">

</style>
