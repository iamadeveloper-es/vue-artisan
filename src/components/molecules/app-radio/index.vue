<script lang="ts">
import { computed, onMounted, onUpdated, ref } from 'vue'
import { useComponentFunctions } from '../../../composables/component-functions'

export default {
    name: 'app-radio',
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
        label: {
            type: String,
            default: 'Radio label'
        },
        name: {
            type: String,
            default: 'radio-name',
            required: true
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

        const setActiveColor = computed(() => {
            return `app-check-radio__icon--${props.activeColor}`
        })

        const isChecked = computed(() => {
            return props.modelValue === props.value;
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
            isChecked,
            setActiveColor,
            hasSlot,
            emitValue
        }
    }
}
</script>

<template lang="pug">
.app-check-radio.app-radio(
:class="{'disabled': disabled}" 
:ref="id")
    .app-check-radio__wrapper
        span.app-check-radio__icon( ria-hidden="true", :class="isChecked ? setActiveColor : ''")
            svg.v-icon__svg(xmlns="http://www.w3.org/2000/svg", viewBox="0 0 24 24", role="img", aria-hidden="true")
                path(
                    v-if="!isChecked",
                    d="M12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4C16.42,4 20,7.58 20,12C20,16.42 16.42,20 12,20M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z"
                )
                path(
                    v-else,
                    d="M12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4C16.42,4 20,7.58 20,12C20,16.42 16.42,20 12,20M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M12,7C9.24,7 7,9.24 7,12C7,14.76 9.24,17 12,17C14.76,17 17,14.76 17,12C17,9.24 14.76,7 12,7Z"
                )
        input.app-check-radio__input(
        :aria-checked="isChecked" 
        :id="id" 
        :disabled="disabled"
        :checked="isChecked"
        :name="name"
        role="radio" 
        type="radio" 
        :value="value"
        @change="emitValue($event)")
    label.app-check-radio__label(:for="id") 
        span(v-if="!hasSlot") {{label}}
        slot(v-else, name="label")
</template>

<style lang="scss">
@import 'index';
</style>