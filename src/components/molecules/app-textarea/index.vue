<script lang="ts">

import { onMounted, ref } from 'vue'

export default {
    name: 'app-textarea',
    props: {
        modelValue: {
            default: '',
            required: true
        },
        name: {
            type: String,
            required: true
        },
        label: {
            type: String,
            default: ''
        },
        placeholder: {
            type: String,
            default: ''
        },
        required: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        readOnly: {
            type: Boolean,
            default: false
        },
        floatingLabel: {
            type: Boolean,
            default: false
        },
        borderBottom: {
            type: Boolean,
            default: false
        },
        ariaLabelledby: {
            type: String,
            default: 'Select Input'
        },
        rows: {
            type: Number,
            default: 4
        },
        maxLength: {
            type: Number
        },
        minLength: {
            type: Number
        }
    },
    setup(props, context) {
        const isFocused = ref(false)
        
        const emitValue = (ev: Event) => {
            const target = ev.target  as HTMLInputElement
            context.emit('update:modelValue', target.value)
        }

        const emitFocus = (ev: FocusEvent) => {
            isFocused.value = true
            context.emit('onFocus', ev)
        }

        const emitBlur = (ev: FocusEvent) => {
            isFocused.value = props.modelValue.length > 0 ? true : false
            context.emit('onBlur', ev)
        }

        onMounted(() => {
            isFocused.value = props.modelValue.length > 0
        })

        return {
            isFocused,
            emitValue,
            emitFocus,
            emitBlur
        }
    }
}
</script>

<template lang="pug">
.app-textarea-wrapper.app-floating-label(:class="{'is-focused': floatingLabel && isFocused}")
    textarea.app-text-area-field(
    :class="{'border-bottom-only': borderBottom, 'text-area-disabled': disabled}",
    :rows="rows",
    :maxLength="maxLength",
    :minLength="minLength",
    :disabled="disabled",
    :placeholder="placeholder",
    :required="required",
    :readonly="readOnly",
    :aria-label="placeholder || label",
    :aria-labelledby="ariaLabelledby",
    :id="name"
    :name="name"
    :value="modelValue"
    aria-placeholder="dsf",
    @input="emitValue",
    @focus="emitFocus",
    @blur="emitBlur")
    label.app-label(
    :class="{'ui-label-float' : floatingLabel, 'label-disabled': disabled}"
    :for="name") {{ label }}
</template>

<style lang="scss">
@import 'index';
</style>
