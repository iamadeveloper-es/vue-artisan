<script lang="ts">
import { ref } from 'vue';
import AppStepper from '../index.vue';
import AppInputField from '../../../molecules/app-input-field/index.vue';

export default {
  name: 'app-stepper-demo',
  components: {AppStepper, AppInputField},
  setup (){
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

    return{
      steps,
      formOne,
      formTwo,
      formThree, 
      formFourth,  
      completedSteps, 
      handleEvent, 
      validateFormOne, 
      validateFormTwo, 
      validateFormThree, 
      validateFormFourth

    };
  }
};
</script>

<template lang="pug">
.app-stepper-demo 
  app-stepper(:steps="steps", 
  @clicked="handleEvent")
    template(#stepperContent)
      form(v-if="!completedSteps.one", 
      @submit.prevent="validateFormOne")
        app-input-field(
        v-model="formOne",
        name="account",
        label="Cuenta",
        :outlinedLabel="true")
        button(type="submit", :disabled="!formOne") Completar

      form(v-if="completedSteps.one && !completedSteps.two", 
      @submit.prevent="validateFormTwo")
        app-input-field(
        v-model="formTwo",
        name="adress",
        label="Dirección",
        :outlinedLabel="true")
        button(type="submit", :disabled="!formTwo") Completar

      form(v-if="completedSteps.two && !completedSteps.three", 
      @submit.prevent="validateFormThree")
        app-input-field(
        v-model="formThree",
        name="payment",
        label="Pago",
        :outlinedLabel="true")
        button(type="submit", :disabled="!formThree") Completar

      form(v-if="completedSteps.three && !completedSteps.fourth", 
      @submit.prevent="validateFormFourth")
        app-input-field(
        v-model="formFourth",
        name="confirm",
        label="Confirmación",
        :outlinedLabel="true")
        button(type="submit", :disabled="!formFourth") Finalizar

  div(v-if="completedSteps.fourth")
    h3 Datos introducidos: 
    p Cuenta: {{ formOne }}
    p Dirección: {{ formTwo }}
    p Pago: {{ formThree }}
    p Confirmación: {{ formFourth }}
</template>

<style lang="scss">
.app-stepper-demo{
  .app-stepper{
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