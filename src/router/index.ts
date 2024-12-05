import { createRouter, createWebHistory } from 'vue-router';
import ComponentView from '../views/component-view/index.vue';

//TODO: Borrar esta línea, la ruta y el componente test.vue
import AppTest from '../components/test.vue';

//Atoms
import AppAvatar from '../components/atoms/app-avatar/demo/index.vue';
import AppBadge from '../components/atoms/app-badge/demo/index.vue';
import AppLink from '../components/atoms/app-link/demo/index.vue';
import AppIcon from '../components/atoms/app-icon/demo/index.vue';
import AppProgress from '../components/atoms/app-progress/demo/index.vue';
import AppCircularProgress from '../components/atoms/app-circular-progress/demo/index.vue';
import AppSwitch from '../components/atoms/app-switch/demo/index.vue';
import AppPicture from '../components/atoms/app-picture/demo/index.vue';
import AppImage from '../components/atoms/app-image/demo/index.vue';
import AppMoney from '../components/atoms/app-money/demo/index.vue';

//Molecules
import AppButton from '../components/molecules/app-button/demo/index.vue';
import AppInputField from '../components/molecules/app-input-field/demo/index.vue';
import AppInputFile from '../components/molecules/app-input-file/demo/index.vue';
import AppCheckbox from '../components/molecules/app-checkbox/demo/index.vue';
import AppCounter from '../components/molecules/app-counter/demo/index.vue';
import AppRadio from '../components/molecules/app-radio/demo/index.vue';
import AppTextarea from '../components/molecules/app-textarea/demo/index.vue';
import AppSelect from '../components/molecules/app-select/demo/index.vue';
import AppCustomSelect from '../components/molecules/app-custom-select/demo/index.vue';
import AppTabs from '../components/molecules/app-tabs/demo/index.vue';
import AppModal from '../components/molecules/app-modal/demo/index.vue';
import AppModalV2 from '../components/molecules/app-modal-v2/demo/index.vue';
import AppModalSwipe from '../components/molecules/app-modal-swipe/demo/index.vue';
import AppSnackbar from '../components/molecules/app-snackbar/demo/index.vue';
import AppAlert from '../components/molecules/app-alert/demo/index.vue';
import AppAccordion from '../components/molecules/app-accordion/demo/index.vue';
import AppChip from '../components/molecules/app-chip/demo/index.vue';
import AppBreadcrumbs from '../components/molecules/app-breadcrumbs/demo/index.vue';
import AppDropdown from '../components/molecules/app-dropdown/demo/index.vue';
import AppRange from '../components/molecules/app-range/demo/index.vue';

//Cells
import AppCardRadio from '../components/cells/app-card-radio/demo/index.vue';
import AppPagination from '../components/cells/app-pagination/demo/index.vue';
import AppStepper from '../components/cells/app-stepper/demo/index.vue';
import AppSidebar from '../components/cells/app-sidebar/demo/index.vue';
import AppCard from '../components/cells/app-card/demo/index.vue';

//Organisms
import floatingMenu from '../components/organisms/floating-menu/demo/index.vue';
import AppSlider from '../components/organisms/app-slider/demo/index.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/test/:id',
      name: 'TEST',
      component: AppTest
    },
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
          path: '/app-badge',
          name: 'APP_BADGE',
          component: AppBadge
        },
        {
          path: '/app-link',
          name: 'APP_LINK',
          component: AppLink
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
        },
        {
          path: '/app-circular-progress',
          name: 'APP_CIRCULAR-PROGRESS',
          component: AppCircularProgress
        },
        {
          path: '/app-switch',
          name: 'APP_SWITCH',
          component: AppSwitch
        },
        {
          path: '/app-money',
          name: 'APP_MONEY',
          component: AppMoney
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
          path: '/app-input-file',
          name: 'APP_INPUT_FILE',
          component: AppInputFile
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
          path: '/app-counter',
          name: 'APP_COUNTER',
          component: AppCounter
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
          path: '/app-custom-select',
          name: 'APP_CUSTOM_SELECT',
          component: AppCustomSelect
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
          path: '/app-modal-v2',
          name: 'APP_MODALV2',
          component: AppModalV2
        },
        {
          path: '/app-modal-swipe',
          name: 'APP_MODAL_SWIPE',
          component: AppModalSwipe
        },
        {
          path: '/app-snackbar',
          name: 'APP_SNACKBAR',
          component: AppSnackbar
        },
        {
          path: '/app-alert',
          name: 'APP_ALERT',
          component: AppAlert
        },
        {
          path: '/app-accordion',
          name: 'APP_ACCORDION',
          component: AppAccordion
        },
        {
          path: '/app-chip',
          name: 'APP_CHIP',
          component: AppChip
        },
        {
          path: '/app-breadcrumbs',
          name: 'APP_BREADCRUMBS',
          component: AppBreadcrumbs
        },
        {
          path: '/app-dropdown',
          name: 'APP_DROPDOWN',
          component: AppDropdown
        },
        {
          path: '/app-range',
          name: 'APP_RANGE',
          component: AppRange
        }
      ]
    },
    {
      path: '/cells',
      name: 'CELLS',
      component: ComponentView,
      children: [
        {
          path: '/app-card-radio',
          name: 'APP_CARD_RADIO',
          component: AppCardRadio
        },
        {
          path: '/app-pagination',
          name: 'APP_PAGINATION',
          component: AppPagination
        },
        {
          path: '/app-stepper',
          name: 'APP_STEPPER',
          component: AppStepper
        },
        {
          path: '/app-sidebar',
          name: 'APP_SIDEBAR',
          component: AppSidebar
        },
        {
          path: '/app-card',
          name: 'APP_CARD',
          component: AppCard
        }
      ]
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
        },
        {
          path: '/app-slider',
          name: 'APP_SLIDER',
          component: AppSlider
        }
      ]
    }
  ]
});

export default router;
