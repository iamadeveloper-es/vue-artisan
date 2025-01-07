<script lang="ts" setup>
import { reactive } from 'vue';
import VaBadge from '../../src/components/atoms/va-badge/index.vue';
import AppIcon from '../../src/components/atoms/va-icon/index.vue';

const state = reactive({
  count: 78,
  showBubble: true,
  animation: true
});
</script>

<template>
    <Story title="atoms/va-badge" :layout="{ type: 'grid', width: 400}">
        <Variant>
            <va-badge
            :count="state.count"
            :show-bubble="state.showBubble">
                <template #content>
                    <app-icon
                    :icon="['fa-regular', 'fa-envelope']"
                    :size="25"
                    variant="primary">
                    </app-icon>
                </template>
            </va-badge>
            <template #controls>
                <HstText v-model="state.count" title="count" />
                <HstCheckbox v-model="state.showBubble" title="showBubble" />
                <HstCheckbox v-model="state.animation" title="animation" />
            </template>
        </Variant>
    </Story>
</template>

<style lang="scss">
.__histoire-render-story:not(.__histoire-render-custom-controls){
    overflow: initial;
}
</style>
