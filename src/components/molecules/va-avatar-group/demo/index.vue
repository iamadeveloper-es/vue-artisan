<script lang="ts" setup>
import VaAvatarGroup from '../index.vue';
import VaAvatar from '../../../atoms/va-avatar/index.vue';

defineOptions({
  name: 'va-avatar-group-demo'
});

const avatarData = {
  // Variantes de grupo
  group: [
    {
      name: 'Babco gonzalez gonzález',
      image: './images/avatar.jpg',
      display: 'name',
      size: 'lg'
    },
    {
      name: 'Daniel verdú',
      image: './images/avatar.jpg',
      display: 'name',
      size: 'lg'
    },
    {
      name: 'John',
      image: './images/avatar.jpg',
      display: 'name',
      alt: 'John',
      bgColor: 'va-darken',
      size: 'lg'
    },
    {
      name: 'John Doe',
      image: './images/avatar.jpg',
      alt: 'Jhon',
      size: 'lg'
    },
    {
      name: 'John Doe',
      image: './images/avatar.jpg',
      alt: 'John',
      size: 'lg'
    },
    {
      name: 'John Doe',
      image: './images/avatar.jpg',
      alt: 'John',
      size: 'lg'
    }
  ]
};
</script>

<template>
  <div class="va-avatar-group-demo demo">
    <!-- Variante de grupo -->
    <div class="variant-section">
      <h2>Avatar Group</h2>
      <div class="variant-wrapper">
        <div class="flex">
          <VaAvatarGroup>
            <VaAvatar v-for="(avatar, index) in avatarData.group" :key="index" v-bind="avatar" />
          </VaAvatarGroup>
        </div>
      </div>
    </div>

    <!-- Variante de grupo con max-count -->
    <div class="variant-section">
      <h2>Avatar Group (maxCount)</h2>
      <div class="variant-wrapper">
        <div class="flex">
          <VaAvatarGroup :max-count="4">
            <VaAvatar v-for="(avatar, index) in avatarData.group" :key="index" v-bind="avatar" />
          </VaAvatarGroup>
        </div>
      </div>
    </div>

    <!-- Variante de grupo con max-count -->
    <div class="variant-section">
      <h2>Avatar Group (isDisabled)</h2>
      <div class="variant-wrapper">
        <div class="flex">
          <VaAvatarGroup :max-count="3" :is-disabled="true">
            <VaAvatar v-for="(avatar, index) in avatarData.group" :key="index" v-bind="avatar" />
          </VaAvatarGroup>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">

</style>
