<script lang="ts">
export default {
  name: 'va-avatar-demo'
};
</script>
<script setup lang="ts">
import { type Ref, ref } from 'vue';
import VaAvatar from '../index.vue';

const avatarInfo1: Ref<any> = ref({
  name: 'John Doe',
  img: 'avatar.jpg'
});

const avatarInfo2: Ref<any> = ref({
  name: 'Daniel verdú',
  img: 'avatar.jpg'
});

const message = ref('');

const handleEvent = () => {
  message.value = avatarInfo1.value.name;
};
</script>

<template>
<div class="va-avatar-demo">
  <div class="flex">
    <VaAvatar
      :userInfo="avatarInfo1"
      :clickable="true"
      @clicked="handleEvent"
    />
    <div>
      <p>Click en el avatar</p>
      <p
        v-if="message"
      >
        {{ `Usuario: ${message}` }}
      </p>
    </div>
  </div>
  <div class="flex">
    <VaAvatar
      :userInfo="avatarInfo2"
      display="name"
    />
  </div>
</div>
</template>

<style lang="scss">
.va-avatar-demo {
    display: flex;
    align-items: flex-start;
    gap: 50px;

    .flex {
        display: flex;
        align-items: center;
    }
    p {
        margin: 0.3rem;
        margin-left: 0.7rem;
        display: block;
    }
}
</style>
