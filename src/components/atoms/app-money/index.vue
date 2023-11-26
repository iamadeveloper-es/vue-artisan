<script lang="ts">
export default {
  name: 'app-money'
};
</script>
<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import MoneyUtils from '../../../utils/moneyUtils';

const props = defineProps({
  amount: {
    type: Number,
    required: true
  },
  currency: {
    type: String,
    default: 'EUR'
  },
  lang: {
    type: String,
    default: 'es-ES'
  }
});
const formatedNumber = ref(undefined);

watch(
  () => props.amount || props.currency,
  () => {
    formatModel();
  }
);

const formatModel = () => {
  const { amount, lang, currency } = props;
  const result = MoneyUtils.numFormatFixToLocale(amount, lang, currency);

  formatedNumber.value = result;
};

const configComponent = () => {
  formatModel();
};

onMounted(() => {
  configComponent();
});
</script>

<template lang="pug">
span.app-money {{ formatedNumber }}
</template>

<style lang="scss">
@import 'index';
</style>
