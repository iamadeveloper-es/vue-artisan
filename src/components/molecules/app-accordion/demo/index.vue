<script lang="ts">
export default {
    name: 'app-accordion-demo'
};
</script>
<script setup lang="ts">
import { ref } from 'vue';
import AppAccordion from '../index.vue';

const selected = ref('');
const selected2 = ref('');

</script>

<template lang="pug">
.app-accordion-demo
    p Acordeones agrupados por el mismo v-model
    app-accordion(
    v-model="selected", 
    :title="'#Accordion 1'")
        template(#content)
            p Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex exercitationem vero rerum quidem voluptas qui dolore repellendus officiis recusandae minus! Non, iusto. Reprehenderit quae obcaecati, officia nisi similique quaerat maiores cum nam totam culpa velit impedit soluta aspernatur neque sint? Error dolorem quas dolor animi fugit. Dolores, quas! Placeat unde minima repudiandae ab illum accusantium? Esse voluptas aut commodi doloribus provident natus autem, vel ipsam unde perspiciatis molestias, fuga dicta odio repudiandae ducimus eos accusantium qui sit sequi! Vitae, labore?
    app-accordion(
    v-model="selected", 
    :title="'#Accordion 2'")
        template(#content)
            p Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex exercitationem vero rerum quidem voluptas qui dolore repellendus officiis recusandae minus! Non, iusto. Reprehenderit quae obcaecati, officia nisi similique quaerat maiores cum nam totam culpa velit impedit soluta aspernatur neque sint? Error dolorem quas dolor animi fugit. Dolores, quas! Placeat unde minima repudiandae ab illum accusantium? Esse voluptas aut commodi doloribus provident natus autem, vel ipsam unde perspiciatis molestias, fuga dicta odio repudiandae ducimus eos accusantium qui sit sequi! Vitae, labore?
    app-accordion(
    v-model="selected", 
    :title="'#Accordion 3'")
        template(#content)
            p Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex exercitationem vero rerum quidem voluptas qui dolore repellendus officiis recusandae minus! Non, iusto. Reprehenderit quae obcaecati, officia nisi similique quaerat maiores cum nam totam culpa velit impedit soluta aspernatur neque sint? Error dolorem quas dolor animi fugit. Dolores, quas! Placeat unde minima repudiandae ab illum accusantium? Esse voluptas aut commodi doloribus provident natus autem, vel ipsam unde perspiciatis molestias, fuga dicta odio repudiandae ducimus eos accusantium qui sit sequi! Vitae, labore?

    p Acordeón con v-model diferente
    app-accordion(
    v-model="selected2", 
    :title="'#AnotherAccordion 1'", 
    :iconRotate="false", 
    :icon="['fa-solid', 'fa-image']", 
    :onActiveIcon="['fa-solid', 'fa-house']")
        template(#content)
            p Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex exercitationem vero rerum quidem voluptas qui dolore repellendus officiis recusandae minus! Non, iusto. Reprehenderit quae obcaecati, officia nisi similique quaerat maiores cum nam totam culpa velit impedit soluta aspernatur neque sint? Error dolorem quas dolor animi fugit. Dolores, quas! Placeat unde minima repudiandae ab illum accusantium? Esse voluptas aut commodi doloribus provident natus autem, vel ipsam unde perspiciatis molestias, fuga dicta odio repudiandae ducimus eos accusantium qui sit sequi! Vitae, labore?
</template>

<style lang="scss">
.app-accordion-demo {
    .app-accordion {
        margin-bottom: 1rem;
    }
}
</style>
