<script lang="ts">
import { useRouter } from 'vue-router'
export default {
  name: 'app-dashboard-view',
  setup() {
    const router = useRouter()
    const routes = router.options.routes

    const capitalizeFirstChar = (str: string): string => {
      const firstLetter = str.charAt(0).toUpperCase()
      const text = str.slice(1).toLowerCase().replaceAll('_', ' ')
      return `${firstLetter}${text}`
    }

    
    const showHideMenuItems = (routeName) => {
      const menuItems = document.querySelectorAll('.app-menu li span[data-id]')
      menuItems.forEach(element => {
        const dataId = element.getAttribute('data-id')
        if(dataId !== routeName){
          element.classList.remove('active')
          element.nextElementSibling?.classList.remove('active')
        }
        else{
          element.classList.toggle('active')
          element.nextElementSibling?.classList.toggle('active')
        }
      })
    }

    return {
      routes,
      capitalizeFirstChar,
      showHideMenuItems
    }
  }
}
</script>

<template lang="pug">
ul.app-menu
  li(v-for="(route, index) in routes"
  :key="index")
    span(:data-id="route.name"
      @click="showHideMenuItems(route.name)") {{ capitalizeFirstChar(route.name) }}
    ul.app-menu__submenu(v-if="route.children")
      li(v-for="(child, index) in route.children"
      :key="index")
        router-link(:to="child.path") {{ capitalizeFirstChar(child.name) }}
router-view
</template>

<style lang="scss">
.app-menu{

  span{
    cursor: pointer;

    &.active{
      color: red;
    }
  }

  &__submenu{
    display: none;

    &.active{
      display: block
    }
  }
}
</style>
