import { createRouter, createWebHistory } from 'vue-router'
import ComponentView from '../views/component-view.vue'

//Atoms
import AppAvatar from '../components/atoms/app-avatar/demo/index.vue'
import AppIcon from '../components/atoms/app-icon/demo/index.vue'
import AppProgress from '../components/atoms/app-progress/demo/index.vue'
import AppPicture from '../components/atoms/app-picture/demo/index.vue'
import AppImage from '../components/atoms/app-image/demo/index.vue'

//Molecules
import AppButton from '../components/molecules/app-button/demo/index.vue'
import AppInputField from '../components/molecules/app-input-field/demo/index.vue'
import AppCheckbox from '../components/molecules/app-checkbox/demo/index.vue'
import AppRadio from '../components/molecules/app-radio/demo/index.vue'
import AppTextarea from '../components/molecules/app-textarea/demo/index.vue'
import AppSelect from '../components/molecules/app-select/demo/index.vue'
import AppTabs from '../components/molecules/app-tabs/demo/index.vue'
import AppModal from '../components/molecules/app-modal/demo/index.vue'
import AppSnackbar from '../components/molecules/app-snackbar/demo/index.vue'
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
                    path: '/app-avatar',
                    name: 'APP_AVATAR',
                    component: AppAvatar
                },
                {
                    path: '/app-icon',
                    name: 'APP_ICON',
                    component: AppIcon
                },
                {
                    path: '/app-picture',
                    name: 'APP_PICTURE',
                    component: AppPicture
                },
                {
                    path: '/app-image',
                    name: 'APP_IMAGE',
                    component: AppImage
                },
                {
                    path: '/app-progress',
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
                    path: '/app-select',
                    name: 'APP_SELECT',
                    component: AppSelect
                },
                {
                    path: '/app-button',
                    name: 'APP_BUTTON',
                    component: AppButton
                },
                {
                    path: '/app-tabs',
                    name: 'APP_TABS',
                    component: AppTabs
                },
                {
                    path: '/app-modal',
                    name: 'APP_MODAL',
                    component: AppModal
                },
                {
                    path: '/app-snackbar',
                    name: 'APP_SNACKBAR',
                    component: AppSnackbar
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
