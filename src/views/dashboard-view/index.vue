<script lang="ts">
export default {
  name: 'dashboard-view'
};
</script>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';


const router = useRouter();
const route = useRoute();
const routes = router.options.routes;

const capitalizeFirstChar = (str: string): string => {
  const firstLetter = str.charAt(0).toUpperCase();
  const text = str.slice(1).toLowerCase().replaceAll('_', ' ');
  return `${firstLetter}${text}`;
};

const showHideMenuItems = (routeName) => {
  const menuItems = document.querySelectorAll('.va-menu li span[data-id]');
  menuItems.forEach((element) => {
    const dataId = element.getAttribute('data-id');
    if (dataId !== routeName) {
      element.classList.remove('active');
      element.nextElementSibling?.classList.remove('active');
    } else {
      element.classList.toggle('active');
      element.nextElementSibling?.classList.toggle('active');
    }
  });
};

const currentRouteName = computed(() => {
  return route.name;
});

onMounted(() => {
  console.log(route);
  setTimeout(() => {
    showHideMenuItems(route.matched[0]?.name);
  }, 100);
});
</script>

<template>
<div class="va-dashboard">
  <div class="va-content">
    <ul class="va-menu">
      <li v-for="(route, index) in routes" :key="index"><span :data-id="route.name" @click="showHideMenuItems(route.name)">{{ capitalizeFirstChar(route.name)}}</span>
        <ul class="va-menu__submenu" v-if="route.children">
          <li v-for="(child, index) in route.children" :key="index" :class="{'active':child.name === currentRouteName}">
            <router-link :to="child.path">{{ capitalizeFirstChar(child.name.replace('VA_', '')) }}</router-link>
          </li>
        </ul>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</div>
</template>

<style lang="scss" scoped>
@import 'index';
</style>
