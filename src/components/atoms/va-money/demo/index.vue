<script lang="ts">
export default {
  name: 'va-money-demo'
};
</script>
<script setup lang="ts">
import { ref } from 'vue';
import VaMoney from '../index.vue';

const amount = 1475.56;
const moneyModels = ref([
  {
    desc: 'US Dollar model',
    lang: 'en-US',
    amount: amount,
    currency: 'USD'
  },
  {
    desc: 'Euro model',
    amount: amount,
    currency: 'EUR'
  },
  {
    desc: 'Pound model',
    lang: 'en-GB',
    amount: amount,
    currency: 'GBP'
  },
  {
    desc: 'Yen model',
    lang: 'ja-JP',
    amount: amount,
    currency: 'JPY'
  }
]);
</script>

<template>
<div class="va-money-demo">
  <div
    class="flex"
    v-for="(item, index) in moneyModels"
    :key="index"
  >
    <span>{{ item.desc }}</span>
    <VaMoney
      :lang="item.lang"
      :currency="item.currency"
      :amount="item.amount"
    />
  </div>
</div>
<!-- .va-money-demo
    .flex(
    v-for="(item, index) in moneyModels",
    :key="index")
        span {{ item.desc }}
        app-money(
        :lang="item.lang",
        :currency="item.currency",
        :amount="item.amount") -->
</template>

<style lang="scss">
.va-money-demo {
    display: flex;
    flex-direction: column;
    gap: 30px;

    .flex {
        display: inline-block;
        width: auto;
        flex-direction: column;
        gap: 30px;
        background-color: var(--va-neutral-600);
        padding: 0.5rem;

        span {
            display: block;
        }
    }
}
</style>
