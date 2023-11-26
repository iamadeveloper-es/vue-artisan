<script lang="ts">
export default {
    name: 'app-checkbox'
};
</script>
<script setup lang="ts">
import { computed, onMounted, type Ref, ref, useSlots } from 'vue';
import { useComponentFunctions } from '../../../composables/component-functions';

const props = defineProps({
    modelValue: {
        type: [Array, Boolean]
    },
    disabled: {
        type: Boolean,
        default: false
    },
    value: {
        type: [String, Number, Boolean, Object],
        default: false
    },
    label: {
        type: String,
        default: 'Checkbox label'
    },
    activeColor: {
        type: String,
        default: 'primary'
    }
});
const { randomId } = useComponentFunctions();
const id = ref('');
const checkboxRef: Ref<HTMLInputElement> | Ref<null> = ref(null);
const isChecked: Ref<boolean> = ref(false);
const slots = useSlots();

const setActiveColor = computed(() => {
    return `app-check-radio__icon--${props.activeColor}`;
});

const hasSlot = computed(() => {
    return !!slots['label'];
});

const emit = defineEmits(['update:modelValue']);

const model = computed({
    get () {
        return props.modelValue;
    },
    set (value) {
        emit('update:modelValue', value);
    },
});

const isSelected = computed(() => {
    return isChecked.value;
});

const emitValue = (ev: Event) => {
    const target = ev.target as HTMLInputElement;
    isChecked.value = target.checked;
};

const configComponent = () => {
    id.value = randomId();
    isChecked.value = checkboxRef.value?.checked;
};

onMounted(() => {
    configComponent();
      
});
</script>

<template lang="pug">
.app-check-radio.app-checkbox(
:class="{'disabled': disabled}" 
:ref="id")
    .app-check-radio__wrapper
        span.app-check-radio__icon( ria-hidden="true", :class="isSelected ? setActiveColor : ''")
            svg.v-icon__svg(xmlns="http://www.w3.org/2000/svg", viewBox="0 0 24 24", role="img", aria-hidden="true")
                path(v-if="!isSelected", d="M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z")
                path(v-else, d="M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3Z")
        input.app-check-radio__input(
        :aria-checked="isSelected", 
        :id="id", 
        ref="checkboxRef",
        :disabled="disabled",
        role="checkbox", 
        type="checkbox", 
        v-model="model",
        :value="value", 
        @change="emitValue")
    label.app-check-radio__label(:for="id") 
        span(v-if="!hasSlot") {{label}}
        slot(v-else, name="label")
</template>

<style lang="scss">
@import 'index';
</style>
