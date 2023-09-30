<script lang="ts">
import { computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
export default {
  name: 'app-dashboard-view',
  setup () {
    const router = useRouter();
    const route = useRoute();
    const routes = router.options.routes;

    const capitalizeFirstChar = (str: string): string => {
      const firstLetter = str.charAt(0).toUpperCase();
      const text = str.slice(1).toLowerCase().replaceAll('_', ' ');
      return `${firstLetter}${text}`;
    };

    const showHideMenuItems = (routeName) => {
      const menuItems = document.querySelectorAll('.app-menu li span[data-id]');
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

    return {
      routes,
      capitalizeFirstChar,
      showHideMenuItems,
      currentRouteName
    };
  }
};
</script>

<template lang="pug">
ul.app-menu
  li(v-for="(route, index) in routes"
  :key="index")
    span(:data-id="route.name"
      @click="showHideMenuItems(route.name)") {{ capitalizeFirstChar(route.name) }}
    ul.app-menu__submenu(v-if="route.children")
      li(v-for="(child, index) in route.children"
      :key="index", 
      :class="{'active':child.name === currentRouteName}")
        router-link(:to="child.path") {{ capitalizeFirstChar(child.name) }}
router-view
</template>

<style lang="scss">
.app-menu {
    li span {
        margin-bottom: 0.5rem;
        display: inline-block;
        cursor: pointer;

        &.active {
            color: var(--success);
        }
    }

    li span:hover,
    &__submenu li:hover {
        color: var(--success);
        transition: color 0.1s ease-in-out;
    }

    &__submenu {
        display: none;

        &.active {
            display: block;
        }

        li {
            margin-bottom: 0.5rem;
        }

        li.active {
            color: var(--success);
        }
    }
}
</style>
