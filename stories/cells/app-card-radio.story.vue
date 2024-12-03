<script setup lang="ts">
import AppCardRadio from '../../src/components/cells/app-card-radio/index.vue';

import { ref } from 'vue';

const cardSelected = ref('item1');

const handleChangeEvent = (ev: Event) => {
  const target = ev.target as HTMLInputElement;
  cardSelected.value = target.value;
};
</script>

<template>
  <Story title="cells/app-card-radio">
    <Variant title="Default">
        <app-card-radio 
        value="item1"
        v-model="cardSelected" 
        @onChange="handleChangeEvent"
        name="card-money">
            <template #content>
                <h3>Card Radio 1</h3>
                <p>2.500€</p>
            </template>
        </app-card-radio>
        <app-card-radio 
        value="item2"
        v-model="cardSelected" 
        @onChange="handleChangeEvent"
        name="card-money">
            <template #content>
                <h3>Card Radio 2</h3>
                <p>8.700€</p>
            </template>
        </app-card-radio>
        <app-card-radio 
        value="item3"
        v-model="cardSelected" 
        @onChange="handleChangeEvent"
        name="card-money">
            <template #content>
                <h3>Card Radio 3</h3>
                <p>850€</p>
            </template>
        </app-card-radio>
    </Variant>
  </Story>
</template>

<style lang="scss">
.app-card-radio{
    margin-bottom: 20px;
}
</style>
