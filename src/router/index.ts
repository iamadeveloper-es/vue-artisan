import { createRouter, createWebHistory } from 'vue-router'
import ComponentView from '../views/component-view.vue'
import floatingMenu from '../components/organisms/floating-menu/mixin/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/atoms',
      name: 'ATOMS',
      component: ComponentView,
      children: [
        {
          path: '/floating-menu',
          name: 'FLOATING_MENU',
          component: floatingMenu
        },
        {
          path: '/about',
          name: 'about',
          component: floatingMenu
        }
      ]
    },
    {
      path: '/molecules',
      name: 'MOLECULES',
      component: ComponentView,
      children: [
        {
          path: '/floating-menu',
          name: 'FLOATING_MENU',
          component: floatingMenu
        },
        {
          path: '/about',
          name: 'about',
          component: floatingMenu
        }
      ]
    },
    {
      path: '/cells',
      name: 'CELLS',
      component: ComponentView
    },
    {
      path: '/organisms',
      name: 'ORGANISMS',
      component: ComponentView
    }
  ]
})

export default router
