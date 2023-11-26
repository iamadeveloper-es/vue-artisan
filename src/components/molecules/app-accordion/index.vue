<script lang="ts">
export default {
    name: 'app-accordion'
};
</script>
<script setup lang="ts">
import { computed, ref } from 'vue';
import { useComponentFunctions } from '../../../composables/component-functions';
import AppIcon from '../../atoms/app-icon/index.vue';

const props = defineProps({
    modelValue: {
        default: '',
        required: true
    },
    title: {
        type: String
    },
    icon: {
        type: [Array, String]
    },
    iconSize: {
        type: Number,
        default: 15
    },
    iconVariant: {
        type: String
    },
    onActiveIcon: {
        type: [Array, String]
    },
    iconRotate: {
        type: Boolean,
        default: true
    }
});
const { randomId } = useComponentFunctions();
const accordion = ref(null);

const setId = computed(() => {
    return randomId();
});

const isSelected = computed(() => {
    return props.modelValue === setId.value;
});

const iconClass = computed(() => {
    return isSelected.value && props.iconRotate ? 'collapse-open' : 'collapse-close';
});

const getIcon = computed(() => {
    const icon = props.icon;
    const defaultIcon = ['fa-solid', 'fa-chevron-down'];
    return icon?.length ? icon : defaultIcon;
});

const emit = defineEmits(['update:modelValue', 'onChange']);

const emitValue = (ev: Event) => {
    if (isSelected.value) {
        emit('update:modelValue', '');
    } else {
        const target = ev.target as HTMLInputElement;
        emit('update:modelValue', target.value);
    }
    emit('onChange', ev);
};

const beforeEnter = (el: HTMLElement) => {
    el.style.height = '0';
};
const enter = (el: HTMLElement) => {
    el.style.height = el.scrollHeight + 'px';
};
const beforeLeave = (el: HTMLElement) => {
    el.style.height = el.scrollHeight + 'px';
};
const leave = (el: HTMLElement) => {
    el.style.height = '0';
};
</script>

<template lang="pug">
.app-accordion(ref="accordion")
    .app-accordion__header
        input.app-accordion__input(
        type="checkbox", 
        :id="setId", 
        :value="setId", 
        :name="setId", 
        @change="emitValue")
        label.accesible-hidden(
        :for="setId") {{ title }} 
        span.app-accordion__label {{ title }}
        app-icon(
        :class="iconClass"
        :icon="getIcon", 
        :size="iconSize", 
        :variant="iconVariant", 
        :onActiveIcon="onActiveIcon", 
        :isClicked="isSelected")
    transition(
    name="accordion", 
    v-on:before-enter="beforeEnter", 
    v-on:enter="enter", 
    v-on:before-leave="beforeLeave", 
    v-on:leave="leave")
        .app-accordion__body(v-show="isSelected") 
            .body-inner 
                slot(name="content")
</template>

<style lang="scss">
@import 'index';
</style>
