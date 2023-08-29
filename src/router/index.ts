import { createRouter, createWebHistory } from 'vue-router'
import ComponentView from '../views/component-view.vue'

//Atoms
import AppProgress from '../components/atoms/app-progress/demo/index.vue'

//Molecules
import AppButton from '../components/molecules/app-button/demo/index.vue'
import AppInputField from '../components/molecules/app-input-field/demo/index.vue'
import AppCheckbox from '../components/molecules/app-checkbox/demo/index.vue'
import AppRadio from '../components/molecules/app-radio/demo/index.vue'
import AppTextarea from '../components/molecules/app-textarea/demo/index.vue'
//Organisms
import floatingMenu from '../components/organisms/floating-menu/demo/index.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/atoms',
            name: 'ATOMS',
            component: ComponentView,
            children: [
                {
                    path: '/progress',
                    name: 'APP_PROGRESS',
                    component: AppProgress
                }
            ]
        },
        {
            path: '/molecules',
            name: 'MOLECULES',
            component: ComponentView,
            children: [
                {
                    path: '/app-input-field',
                    name: 'APP_INPUT_FIELD',
                    component: AppInputField
                },
                {
                    path: '/app-textarea',
                    name: 'APP_TEXTAREA',
                    component: AppTextarea
                },
                {
                    path: '/app-checkbox',
                    name: 'APP_CHECKBOX',
                    component: AppCheckbox
                },
                {
                    path: '/app-radio',
                    name: 'APP_RADIO',
                    component: AppRadio
                },
                {
                    path: '/app-button',
                    name: 'APP_BUTTON',
                    component: AppButton
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
            component: ComponentView,
            children: [
                {
                    path: '/floating-menu',
                    name: 'FLOATING_MENU',
                    component: floatingMenu
                }
            ]
        }
    ]
})

export default router
