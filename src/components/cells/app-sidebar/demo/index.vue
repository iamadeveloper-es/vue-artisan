<script lang="ts">
export default {
  name: 'app-sidebar-demo'
};
</script>
<script setup lang="ts">
import { ref } from 'vue';
import AppSidebar from '../index.vue';
import AppInputField from '../../../molecules/app-input-field/index.vue';
import AppButton from '../../../molecules/va-button/index.vue';

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

<template lang="pug">
.app-sidebar-demo
  app-sidebar(:show="showSidebarLeft",
  :showLeft="true")
    template(#sidebarContent)
      h3 Ejemplo de sidebar lateral izquierdo
      form(@submit.prevent="onSubmit")
        app-input-field(
        v-model="formData.name",
        name="name",
        label="Nombre",
        :floatingLabel="true")

        app-input-field(
        v-model="formData.lastName",
        name="lastName",
        label="Apellidos",
        :floatingLabel="true")

        app-input-field(
        v-model="formData.job",
        name="job",
        label="Profesión",
        :floatingLabel="true")

        app-button(type="submit",
        text="Enviar")

      app-button(@clicked="showHideLeft",
      text="Cerrar sidebar",
      :variant="['regular', 'full-width']")

  app-sidebar(:show="showSidebarRight",
  :showLeft="false")
    template(#sidebarContent)
      h3 Ejemplo de sidebar lateral derecho
      form(@submit.prevent="onSubmit")
        app-input-field(
        v-model="formData.name",
        name="name",
        label="Nombre",
        :floatingLabel="true")

        app-input-field(
        v-model="formData.lastName",
        name="lastName",
        label="Apellidos",
        :floatingLabel="true")

        app-input-field(
        v-model="formData.job",
        name="job",
        label="Profesión",
        :floatingLabel="true")

        app-button(type="submit",
        text="Enviar")

      app-button(@clicked="showHideRight",
      text="Cerrar sidebar",
      :variant="['regular', 'full-width']")
  .flex
    div
      app-button(@clicked="showHideLeft",
      text="Toggle sidebar left")
    div
      app-button(@clicked="showHideRight",
      text="Toggle sidebar right")
</template>

<style lang="scss">
.app-sidebar-demo{
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
