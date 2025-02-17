<script lang="ts">
export default {
  name: 'va-checkbox'
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
  name: {
    type: String,
    required: true
  },
  label: {
    type: String,
    default: 'Checkbox label'
  },
  activeColor: {
    type: String,
    default: 'primary'
  },
  validations: {
    type: String
  }
});
const { randomId } = useComponentFunctions();
const id = ref('');
const checkboxRef: Ref<HTMLInputElement> | Ref<null> = ref(null);
const isChecked: Ref<boolean> = ref(false);
const slots = useSlots();

const setActiveColor = computed(() => {
  return `va-check-radio__icon--${props.activeColor}`;
});

const hasSlot = computed(() => {
  return !!slots['label'];
});

const hasLink = computed(() => {
  return !!slots['link'];
});


const emit = defineEmits(['update:modelValue', 'onChange']);

const model = computed({
  get () {
    return props.modelValue;
  },
  set (value) {
    emit('update:modelValue', value);
  },
});

const isSelected = computed(() => {
  // return isChecked.value;
  return !!props.modelValue && isChecked.value;
});

const emitValue = (ev: Event) => {
  const target = ev.target as HTMLInputElement;
  isChecked.value = target.checked;
  emit('onChange', isChecked.value);
};

const configComponent = () => {
  id.value = randomId();
  isChecked.value = checkboxRef.value?.checked;
};

onMounted(() => {
  configComponent();

});

</script>

<template>
<div
class="va-check-radio va-checkbox"
:class="{'disabled': disabled}"
:ref="id"
>
  <div class="va-checkbox__inner">
    <div class="va-check-radio__wrapper">
      <span
        class="va-check-radio__icon"
        aria-hidden="true"
        :class="isSelected ? setActiveColor : ''"
      >
        <svg
          class="v-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          role="img"
          aria-hidden="true"
          >
          <path v-if="!isSelected" d="M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z"></path>
          <path v-else d="M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3Z"></path>
        </svg>
      </span>
      <input
        class="va-check-radio__input"
        :aria-checked="isSelected"
        :id="id"
        ref="checkboxRef"
        :disabled="disabled"
        role="checkbox"
        type="checkbox"
        :name="name"
        v-model="model"
        :value="value"
        :data-validations="validations"
        @change="emitValue"
      >
    </div>
    <label
      class="va-check-radio__label"
      :for="id"
    >
      <span v-if="!hasSlot">{{label}}</span>
      <slot v-else name="label"></slot>
      <slot v-if="hasLink" name="link"></slot>
    </label>
  </div>
  <span class="form-error-message" :data-validation-error="`error-message-${id}`"></span>
</div>
</template>

<style lang="scss">
@import 'index';
</style>
