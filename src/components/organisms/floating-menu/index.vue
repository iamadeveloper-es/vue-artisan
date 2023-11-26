
<script lang="ts">
export default {
    name: 'app-floating-menu'
};
</script>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const show = ref(false);
const scollPos = ref(0);
const menuItems = [
    {
        name: 'Home',
        route: '/',
        icon: 'fa-solid fa-house'
    },
    {
        name: 'Account',
        route: '/account',
        icon: ''
    },
    {
        name: 'Data',
        route: '/data',
        icon: ''
    }
];

onMounted(() => {
    showMenu();
});

const showMenu = () => {
    window.addEventListener(
        'scroll',
        function () {
            // or window.addEventListener("scroll"....
            var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
            if (st > scollPos.value) {
                // downscroll code
                show.value = false;
                // console.log('down')
                console.log('hello world');
            } else if (st < scollPos.value) {
                // upscroll code
                show.value = true;
                // console.log('Up')
            } // else was horizontal scroll
            scollPos.value = st <= 0 ? 0 : st; // For Mobile or negative scrolling
        },
        false
    );
};
</script>

<template lang="pug">
nav.floating-menu(:class="{ active: show }")
  ul
    li(v-for="(item, index) in menuItems" 
    :key="index")
      router-link(:to="item.route") {{ item.name }}
        span.fa-solid.fa-house
</template>

<style lang="scss">
@import 'index';
</style>
