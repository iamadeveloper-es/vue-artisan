<script setup lang="ts">
import { reactive } from 'vue';
import VaButton from '../../src/components/molecules/va-button/index.vue';
import { logEvent } from 'histoire/client';

const regular = reactive({
  counter: 0,
  text: 'button'
});

const small = reactive({
  counter: 0,
  text: 'button',
  variant: 'small'
});

const outline = reactive({
  counter: 0,
  text: 'button',
  variant: ['outline', 'small'],
});

const big = reactive({
  counter: 0,
  text: 'button',
  variant: 'big',
  icon: ['fa-solid', 'fa-plus'],
  iconSize: 15
});

const roundMedium = reactive({
  counter: 0,
  variant: 'round-medium',
  icon: ['fa-solid', 'fa-plus'],
  iconSize: 20
});

const fullWidth = reactive({
  counter: 0,
  text: 'button',
  variant: 'full-width'
});

const handleEvent = (button) => {
  switch (button) {
  case 'regular':
    regular.counter++;
    break;
  case 'small':
    small.counter++;
    break;
  case 'outline':
    outline.counter++;
    break;
  case 'big':
    big.counter++;
    break;
  case 'roundMedium':
    roundMedium.counter++;
    break;
  case 'fullWidth':
    fullWidth.counter++;
    break;
  }
};
</script>

<template>
<Story title="molecules/va-button" :layout="{ type: 'grid', width: 400 }">
    <Variant title="Regular">
        <template #default>
            <va-button v-bind="regular" @clicked="handleEvent('regular'), logEvent('clicked', $event)"></va-button>
            <p>{{ regular.counter }}</p>
        </template>
    </Variant>
    <Variant title="Small">
        <va-button v-bind="small" @clicked="handleEvent('small'), logEvent('clicked', $event)"></va-button>
        <p>{{ small.counter }}</p>
    </Variant>
    <Variant title="Outline">
        <va-button v-bind="outline" @clicked="handleEvent('outline'), logEvent('clicked', $event)"></va-button>
        <p>{{ outline.counter }}</p>
    </Variant>
    <Variant title="Big">
        <va-button v-bind="big" @clicked="handleEvent('big'), logEvent('clicked', $event)"></va-button>
        <p>{{ big.counter }}</p>
    </Variant>
    <Variant title="Round medium">
        <va-button v-bind="roundMedium" @clicked="handleEvent('roundMedium'), logEvent('clicked', $event)"></va-button>
        <p>{{ roundMedium.counter }}</p>
    </Variant>
    <Variant title="Full width">
        <va-button v-bind="fullWidth" @clicked="handleEvent('fullWidth'), logEvent('clicked', $event)"></va-button>
        <p>{{ fullWidth.counter }}</p>

        <!-- <template #source>
            <textarea v-pre>
                <va-button
                text="button"
                variant="['regular', 'full-width']"
                @clicked="handleEvent">
                </va-button>
            </textarea>
      </template> -->
    </Variant>

</Story>
</template>

