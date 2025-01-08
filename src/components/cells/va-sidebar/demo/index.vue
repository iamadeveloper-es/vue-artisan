<script lang="ts">
export default {
  name: 'va-sidebar-demo'
};
</script>
<script setup lang="ts">
import { ref } from 'vue';
import VaSidebar from '../index.vue';
import VaInputField from '../../../molecules/va-input-field/index.vue';
import VaButton from '../../../molecules/va-button/index.vue';

const showSidebarLeft = ref(false);
const showSidebarRight = ref(false);
const formData = ref({
  name: '',
  lastName: '',
  job: ''
});

const showHideLeft = () => {
  showSidebarLeft.value = !showSidebarLeft.value;
};

const showHideRight = () => {
  showSidebarRight.value = !showSidebarRight.value;
};

const onSubmit = () => {
  console.log(formData.value);
};
</script>

<template>
<div class="va-sidebar-demo">
  <va-sidebar :show="showSidebarLeft" :showLeft="true">
    <template #sidebarContent>
      <h3>Ejemplo de sidebar lateral izquierdo</h3>
      <form @submit.prevent="onSubmit">
        <va-input-field v-model="formData.name" name="name" label="Nombre" :floatingLabel="true"></va-input-field>
        <va-input-field v-model="formData.lastName" name="lastName" label="Apellidos" :floatingLabel="true"></va-input-field>
        <va-input-field v-model="formData.job" name="job" label="Profesión" :floatingLabel="true"></va-input-field>
        <va-button type="submit" text="Enviar"></va-button>
      </form>
      <va-button @clicked="showHideLeft" text="Cerrar sidebar" :variant="['regular', 'full-width']"></va-button>
    </template>
  </va-sidebar>
  <va-sidebar :show="showSidebarRight" :showLeft="false">
    <template #sidebarContent>
      <h3>Ejemplo de sidebar lateral derecho</h3>
      <form @submit.prevent="onSubmit">
        <va-input-field v-model="formData.name" name="name" label="Nombre" :floatingLabel="true"></va-input-field>
        <va-input-field v-model="formData.lastName" name="lastName" label="Apellidos" :floatingLabel="true"></va-input-field>
        <va-input-field v-model="formData.job" name="job" label="Profesión" :floatingLabel="true"></va-input-field>
        <va-button type="submit" text="Enviar"></va-button>
      </form>
      <va-button @clicked="showHideRight" text="Cerrar sidebar" :variant="['regular', 'full-width']"></va-button>
    </template>
  </va-sidebar>
  <div class="flex">
    <div>
      <va-button @clicked="showHideLeft" text="Toggle sidebar left"></va-button>
    </div>
    <div>
      <va-button @clicked="showHideRight" text="Toggle sidebar right"></va-button>
    </div>
  </div>
</div>
</template>

<style lang="scss">
.va-sidebar-demo{
  display: flex;
  justify-content: flex-end;
  min-height: 2000px;

  form input {
    margin-bottom: 1rem;
  }

  button:not(.flex  button){
    margin-top: 1rem;
  }

  .flex{
    width: 80%;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;

    button:first-of-type{
      margin-bottom: 1rem;
    }
  }
}
</style>
