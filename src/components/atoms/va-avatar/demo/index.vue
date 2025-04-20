<script setup lang="ts">
import { ref } from 'vue';
import VaAvatar from '../index.vue';

defineOptions({
  name: 'va-avatar-demo'
});

// Estado para mostrar el mensaje de click
const message = ref<string>('');

// Función para manejar el evento click en un avatar
const handleEvent = (item: any) => {
  message.value = !message.value ? item.name : ''; // Alternar el mensaje
};

// Datos para diferentes avatares con distintas variantes
const avatarData = {
  // Variantes de tamaño (size)
  sizeVariants: [
    {
      name: 'Babco gonzalez gonzález',
      image: './images/avatar.jpg',
      display: 'name',
      size: 'xs',
    },
    {
      name: 'Daniel verdú',
      image: './images/avatar.jpg',
      display: 'name',
      size: 'sm',
    },
    {
      name: 'John',
      image: './images/avatar.jpg',
      display: 'name',
      size: 'md',
      alt: 'John',
      bgColor: 'va-darken',
    },
    {
      name: 'John Doe',
      image: './images/avatar.jpg',
      size: 'lg',
      alt: 'Jhon'
    },
    {
      name: 'John Doe',
      image: './images/avatar.jpg',
      size: 'xl',
      alt: 'John',
      clickable: true,
      action: handleEvent,
    }
  ],
  // Variantes con bordes redondeados (isRounded)
  isRoundedVariants: [
    {
      name: 'John Doe',
      image: './images/avatar.jpg',
      size: 'md',
      alt: 'John',
      isRounded: true,
    },
    {
      name: 'Jane Smith',
      image: './images/avatar.jpg',
      size: 'lg',
      alt: 'Jane',
      isRounded: false,
    }
  ],
  // Variantes con bordes (isBordered)
  isBorderedVariants: [
    {
      name: 'John Doe',
      image: './images/avatar.jpg',
      size: 'md',
      alt: 'John',
      color: 'va-info',
      isBordered: true,
    },
    {
      name: 'Jane Smith',
      image: './images/avatar.jpg',
      size: 'lg',
      alt: 'Jane',
      color: 'va-danger',
      isRounded: false,
      isBordered: true,
    }
  ],
  // Variantes interactivas (clickable)
  clickableVariants: [
    {
      name: 'Interactive Avatar',
      image: './images/avatar.jpg',
      size: 'md',
      alt: 'Interactive Avatar',
      clickable: true,
      action: handleEvent,
    }
  ],
  // Variantes con texto adicional (text)
  textVariants: [
    {
      name: 'John',
      image: './images/avatar.jpg',
      display: 'name',
      text: '+2',
      size: 'xs',
      alt: 'John',
      bgColor: 'va-darken',
    },
    {
      name: 'Jane',
      image: './images/avatar.jpg',
      display: 'name',
      text: '+10',
      size: 'lg',
      alt: 'Jane',
      bgColor: 'va-success',
    }
  ]
};

</script>

<template>
  <div class="va-avatar-demo demo">

    <!-- Variantes de tamaño (size) -->
    <div class="variant-section">
      <h2>Tamaño (size)</h2>
      <div class="variant-wrapper">
        <div class="flex" v-for="(avatar, index) in avatarData.sizeVariants" :key="index">
          <VaAvatar v-bind="avatar" />
          <span>size: {{ avatar.size }}</span>
        </div>
      </div>
    </div>

    <!-- Variantes con bordes redondeados (isRounded) -->
    <div class="variant-section">
      <h2>Bordes Redondeados (isRounded)</h2>
      <div class="variant-wrapper">
        <div class="flex" v-for="(avatar, index) in avatarData.isRoundedVariants" :key="index">
          <VaAvatar v-bind="avatar" />
          <span>isRounded: {{ avatar.isRounded }}</span>
        </div>
      </div>
    </div>

    <!-- Variantes interactivas (clickable) -->
    <div class="variant-section">
      <h2>Avatar Interactivo (clickable)</h2>
      <div class="variant-wrapper">
        <div class="flex" v-for="(avatar, index) in avatarData.clickableVariants" :key="index">
          <VaAvatar v-bind="avatar" @clicked="handleEvent(avatar)" />
          <span>clickable: {{ avatar.clickable }}</span>
          <div v-if="message" class="va-avatar-demo__message">
            <span>Has hecho click en: {{ message }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Variantes con borde (isBordered) -->
    <div class="variant-section">
      <h2>Con borde (isBordered)</h2>
      <div class="variant-wrapper">
        <div class="flex" v-for="(avatar, index) in avatarData.isBorderedVariants" :key="index">
          <VaAvatar v-bind="avatar" />
          <span>isBordered: {{ avatar.isBordered }}</span>
          <span>color: {{ avatar.color }}</span>
        </div>
      </div>
    </div>

    <!-- Variantes con texto adicional (text) -->
    <div class="variant-section">
      <h2>Texto Adicional (text)</h2>
      <div class="variant-wrapper">
        <div class="flex" v-for="(avatar, index) in avatarData.textVariants" :key="index">
          <VaAvatar v-bind="avatar" />
          <span>text: {{ avatar.text }}</span>
        </div>
      </div>
    </div>

  </div>
</template>

<style lang="scss">

</style>
