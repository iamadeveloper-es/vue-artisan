<script lang="ts">
export default {
  name: 'va-stepper-demo'
};
</script>
<script setup lang="ts">
import { ref } from 'vue';
import VaStepper from '../index.vue';
import VaInputField from '../../../molecules/va-input-field/index.vue';

const formOne = ref('');
const formTwo = ref('');
const formThree = ref('');
const formFourth = ref('');
const completedSteps = ref({
  one: false,
  two: false,
  three: false,
  fourth: false
});
const steps = ref([
  {
    label: 'Cuenta',
    text: '',
    completed: false,
    icon: {
      onEdit: ['fa-solid', 'fa-pen'],
      onClomplete: ['fa-solid', 'fa-check']
    }
  },
  {
    label: 'Dirección',
    text: '',
    completed: false,
    icon: {
      onEdit: ['fa-solid', 'fa-pen'],
      onClomplete: ['fa-solid', 'fa-check']
    }
  },
  {
    label: 'Pago',
    text: '',
    completed: false,
    icon: {
      onEdit: ['fa-solid', 'fa-pen'],
      onClomplete: ['fa-solid', 'fa-check']
    }
  },
  {
    label: 'Confirmación',
    text: '',
    completed: false,
    icon: {
      onEdit: ['fa-solid', 'fa-pen'],
      onClomplete: ['fa-solid', 'fa-check']
    }
  },
  // {
  //   label: 'Confirmación',
  //   text: '5',
  //   completed: false
  // }
]);

const handleEvent = (ev) => {
  console.log(ev);
  steps.value[ev].completed = true;
};

const handleSteps = (ev) => {

  steps.value[ev].completed = true;
};

const validateFormOne = () => {
  if(formOne.value){
    handleSteps(0);
    completedSteps.value.one = true;
  }
};

const validateFormTwo = () => {
  if(formTwo.value){
    handleSteps(1);
    completedSteps.value.two = true;
  }
};

const validateFormThree = () => {
  if(formThree.value){
    handleSteps(2);
    completedSteps.value.three = true;
  }
};

const validateFormFourth = () => {
  if(formFourth.value){
    handleSteps(3);
    completedSteps.value.fourth = true;
  }
};
</script>

<template>

<div class="va-stepper-demo">
  <va-stepper :steps="steps" @clicked="handleEvent">
    <template #stepperContent>
      <form v-if="!completedSteps.one" @submit.prevent="validateFormOne">
        <va-input-field v-model="formOne" name="account" label="Cuenta" :outlinedLabel="true"></va-input-field>
        <button type="submit" :disabled="!formOne">Completar</button>
      </form>
      <form v-if="completedSteps.one && !completedSteps.two" @submit.prevent="validateFormTwo">
        <va-input-field v-model="formTwo" name="adress" label="Dirección" :outlinedLabel="true"></va-input-field>
        <button type="submit" :disabled="!formTwo">Completar</button>
      </form>
      <form v-if="completedSteps.two && !completedSteps.three" @submit.prevent="validateFormThree">
        <va-input-field v-model="formThree" name="payment" label="Pago" :outlinedLabel="true"></va-input-field>
        <button type="submit" :disabled="!formThree">Completar</button>
      </form>
      <form v-if="completedSteps.three && !completedSteps.fourth" @submit.prevent="validateFormFourth">
        <va-input-field v-model="formFourth" name="confirm" label="Confirmación" :outlinedLabel="true"></va-input-field>
        <button type="submit" :disabled="!formFourth">Finalizar</button>
      </form>
    </template>
  </va-stepper>
  <div v-if="completedSteps.fourth">
    <h3>Datos introducidos:</h3>
    <p>Cuenta: {{ formOne }}</p>
    <p>Dirección: {{ formTwo }}</p>
    <p>Pago: {{ formThree }}</p>
    <p>Confirmación: {{ formFourth }}</p>
  </div>
</div>
</template>

<style lang="scss">
.va-stepper-demo{
  .va-stepper{
    max-width: 90%;
    margin-left: auto;
    margin-right: auto;
  }
  form{
    margin-top: 2rem;

    button{
      margin-top: 1rem;
    }
  }
}
</style>
