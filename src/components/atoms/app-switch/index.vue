<script lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useComponentFunctions } from '../../../composables/component-functions'

export default {
    name: 'app-switch',
    props: {
        modelValue: {
            default: '',
            required: true
        },
        disabled: {
            type: Boolean,
            default: false
        },
        value: {
            type: [String, Number, Boolean],
            default: false
        },
        cClass:{
            type: [String, Array],
        },
        activeColor: {
            type: String,
            default: 'primary'
        }
    },
    setup(props, context){
        const {randomId} = useComponentFunctions()
        const id = ref('')
        
        
        const isActive = ref(false)

        const setActiveColor = computed(() => {
            return `app-check-radio__icon--${props.activeColor}`
        })

        const hasSlot = computed(() => {
            return !!context.slots['label']
        })

        const emitValue = (ev: Event) => {
            const target = ev.target  as HTMLInputElement
            context.emit('update:modelValue', target.value)
            context.emit('onChange', ev)
        }

        const configComponent = () => {
            id.value = randomId()
        }

        onMounted(() => {
            configComponent()
        })

        return {
            id,
            isActive,
            setActiveColor,
            hasSlot,
            emitValue
        }
    }
}
</script>

<template lang="pug">
.app-switch-wrapper(
:class="{'disabled': disabled}" 
:ref="id")
    label.app-switch(:for="id")
        input(
        :aria-checked="modelValue?.status" 
        :id="id" 
        :disabled="disabled"
        :checked="modelValue?.status"
        role="checkbox" 
        type="checkbox" 
        :value="modelValue"
        @change="emitValue($event)")
        span.app-switch__slider
</template>

<style lang="scss">
@import 'index';
</style>