<script lang="ts">
export default {
    name: 'app-tabs'
};
</script>

<script setup lang="ts">
import { computed, onMounted, type Ref, ref, watch } from 'vue';
import { useComponentFunctions } from '../../../composables/component-functions';

const props = defineProps({
    modelValue: {
        default: '',
        required: true
    },
    label: {
        type: String,
        default: 'Radio label'
    },
    tabs: {
        type: Array<Object>
    }
});

const { randomId, rippleEffect } = useComponentFunctions();
const itemRefs: Ref<HTMLElement[]> = ref([]);

watch(
    () => props.modelValue,
    (newVal) => {
        if (newVal) {
            setIndicators();
        }
    }
);

const formatedTabs = computed(() => {
    return props.tabs?.map((tab, index) => {
        return {
            ...tab,
            id: `${randomId()}-${index}`
        };
    });
});

const emit = defineEmits(['update:modelValue', 'onChange']);

const emitValue = (ev: Event) => {
    const target = ev.target as HTMLInputElement;
    emit('update:modelValue', target.value);
    emit('onChange', ev);
};

const setIndicators = () => {
    const selectedTab: HTMLElement | undefined = itemRefs.value.find(
        (item) => item.dataset.value === props.modelValue
    );
    const tabWidth = Number(selectedTab?.getBoundingClientRect().width.toFixed(2));
    document.body.style.setProperty('--tab-width', `${tabWidth}px`);
    document.body.style.setProperty('--tab-left', `${selectedTab?.offsetLeft}px`);
};

onMounted(() => {
    setIndicators();
});
</script>

<template lang="pug">
.app-tabs(
tabindex="-1"
role="tablist"
)
    .app-tabs__tab(
    v-for="(tab, index) in formatedTabs"
    :key="index"
    ref="itemRefs"
    :data-value="tab.value"
    :class="{'active': tab.value === modelValue}", 
    @click="rippleEffect($event, $event.target.parentElement)")
        input.app-tabs__input(
        type="radio"
        :id="tab.id"
        :name="tab.name"
        :value="tab.value"
        :tabindex="index === 0 ? 0 : -1"
        role="tab"
        @change="emitValue($event)")
        label.app-tabs__label(
        :for="tab.id"
        ) {{ tab.text }}
    .app-tabs__indicator
TransitionGroup(name="slide-fade")
    slot(name="tabBody")
</template>

<style lang="scss">
@import 'index';
</style>
