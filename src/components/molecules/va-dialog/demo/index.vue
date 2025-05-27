<script lang="ts" setup>
import VaDialog from '../index.vue';
import VaButton from '../../va-button/index.vue';
import { ref } from 'vue';

defineOptions({
  name: 'va-dialog-demo'
});

const showModal = ref(false);
const handleModal = (status: boolean) => {
  showModal.value = status;
};
</script>
<template>
  <div class="va-dialog-demo">
    <VaButton
    ref="myModal"
    text="Abrir Modal"
    variant="big"
    @clicked="handleModal(true)"
    />
    <VaDialog :isOpen="showModal">
      <template #body>
        <h3>Modal content</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto voluptas eaque tenetur illum error reprehenderit quisquam mollitia dolorum, aspernatur, qui eos molestiae ipsum quis animi ex odit perferendis temporibus. Cupiditate.</p>
        <VaButton
        text="Cerrar Modal"
        variant="big"
        @clicked="handleModal(false)"
        />
      </template>
    </VaDialog>
  </div>
</template>
<style lang="scss">

</style>
