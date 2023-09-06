<script lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useComponentFunctions } from '../../../composables/component-functions'

export default {
  name: 'app-input-field',
  props: {
      modelValue: {
        default: '',
        required: true
      },
      type: {
        type: String,
        default: 'text'
      },
      name: {
        type: String,
        required: true
      },
      label: {
        type: String,
        required: true
      },
      placeholder: {
        type: String
      },
      ariaLabelledby: {
        type: String,
        default: 'Input'
      },
      disabled: {
        type: Boolean,
        default: false
      },
      required: {
        type: Boolean,
        default: false
      },
      readonly: {
        type: Boolean,
        default: false
      },
      min: {
        type: Number
      },
      max: {
        type: Number
      },
      maxlength: {
        type: Number
      },
      showLabel: {
        type: Boolean,
        default: true
      },
      floatingLabel: {
        type: Boolean,
        default: false
      },
      borderBottom: {
        type: Boolean,
        default: false
      },
      icon: {
        type: Array,
        default: (() => ['fa-regular', 'fa-circle-xmark'])
      },
  },
  setup(props, context){
    const {randomId} = useComponentFunctions()
    const isFocused = ref(false)
    const inputType = ref(props.type)
    const id = ref('')

    const passwordIcon = computed(() => {
      return inputType.value === 'password' ? '' : 'fa-eye'
    })

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

    const clearField = () => {
      isFocused.value = false
      context.emit('update:modelValue', '')
    }

    const showPassword = () => {
      inputType.value === 'password' ? 
      inputType.value = 'text' : 
      inputType.value = 'password'
    }

    const iconAction = () => {
      if(props.type === 'password'){
        showPassword()
      }
      else{
        clearField()
      }
    }

    const configComponent = () => {
        id.value = randomId()
        isFocused.value = props.modelValue.length > 0
    }

    onMounted(() => {
      configComponent()
    })

    return{
      id,
      isFocused,
      inputType,
      passwordIcon,
      emitValue,
      emitFocus,
      emitBlur,
      iconAction
    }
  }
}
</script>

<template lang="pug">
.app-input-field.form-field-wrapper(:class="{'is-focused': floatingLabel && isFocused}")
  label.app-label(v-if="label", 
  :class="{'accesible-hidden' : !showLabel, 'label-float' : floatingLabel}", 
  :for="id") {{ label }}
  input.app-input(
  :class="{'disabled': disabled, 'b-bottom': borderBottom, 'hide-placeholder' : floatingLabel}"
  :value="modelValue"
  :type="inputType"
  :id="id"
  :name="name"
  :placeholder="placeholder"
  :aria-label="placeholder || label"
  :aria-labelledby="ariaLabelledby"
  :disabled="disabled"
  :required="required"
  :readonly="readonly"
  :min="min"
  :max="max"
  :maxlength="maxlength"
  @input="emitValue",
  @focus="emitFocus",
  @blur="emitBlur")
  span.app-input-icon(v-if="modelValue.length && icon.length", 
  @click="iconAction", 
  :class="icon, {'icon-float': floatingLabel}")
</template>

<style lang="scss">
@import 'index';

</style>