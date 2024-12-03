<script setup lang="ts">
import { reactive } from 'vue';
import AppButton from '../../src/components/molecules/app-button/index.vue';
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
<Story title="molecules/app-button" :layout="{ type: 'grid', width: 400 }">
    <Variant title="Regular">
        <template #default>
            <app-button v-bind="regular" @clicked="handleEvent('regular'), logEvent('clicked', $event)"></app-button>
            <p>{{ regular.counter }}</p>
        </template>
    </Variant>
    <Variant title="Small">
        <app-button v-bind="small" @clicked="handleEvent('small'), logEvent('clicked', $event)"></app-button>
        <p>{{ small.counter }}</p>
    </Variant>
    <Variant title="Outline">
        <app-button v-bind="outline" @clicked="handleEvent('outline'), logEvent('clicked', $event)"></app-button>
        <p>{{ outline.counter }}</p>
    </Variant>
    <Variant title="Big">
        <app-button v-bind="big" @clicked="handleEvent('big'), logEvent('clicked', $event)"></app-button>
        <p>{{ big.counter }}</p>
    </Variant>
    <Variant title="Round medium">
        <app-button v-bind="roundMedium" @clicked="handleEvent('roundMedium'), logEvent('clicked', $event)"></app-button>
        <p>{{ roundMedium.counter }}</p>
    </Variant>
    <Variant title="Full width">
        <app-button v-bind="fullWidth" @clicked="handleEvent('fullWidth'), logEvent('clicked', $event)"></app-button>
        <p>{{ fullWidth.counter }}</p>
        
        <!-- <template #source>
            <textarea v-pre>
                <app-button 
                text="button"
                variant="['regular', 'full-width']"
                @clicked="handleEvent">
                </app-button>
            </textarea>
      </template> -->
    </Variant>
    
</Story>
</template>

