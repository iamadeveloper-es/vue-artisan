import { createRouter, createWebHistory } from 'vue-router';
import ComponentView from '../views/component-view/index.vue';

//TODO: Borrar esta línea, la ruta y el componente test.vue
import AppTest from '../components/test.vue';

//Atoms
import VaAvatar from '../components/atoms/va-avatar/demo/index.vue';
import VaBadge from '../components/atoms/va-badge/demo/index.vue';
import VaLink from '../components/atoms/va-link/demo/index.vue';
import VaMoney from '../components/atoms/va-money/demo/index.vue';
import VaIcon from '../components/atoms/va-icon/demo/index.vue';
import VaIconSvg from '../components/atoms/va-icon-svg/demo/index.vue';
import VaProgress from '../components/atoms/va-progress/demo/index.vue';
import VaCircularProgress from '../components/atoms/va-circular-progress/demo/index.vue';
import VaSwitch from '../components/atoms/va-switch/demo/index.vue';
import VaPicture from '../components/atoms/va-picture/demo/index.vue';
import VaImage from '../components/atoms/va-image/demo/index.vue';

//Molecules
import VaButton from '../components/molecules/va-button/demo/index.vue';
import VaInputField from '../components/molecules/va-input-field/demo/index.vue';
import VaCheckbox from '../components/molecules/va-checkbox/demo/index.vue';
import VACounter from '../components/molecules/va-counter/demo/index.vue';
import VaRadio from '../components/molecules/va-radio/demo/index.vue';
import VaTextarea from '../components/molecules/va-textarea/demo/index.vue';
import VaSelect from '../components/molecules/va-select/demo/index.vue';
import VaCustomSelect from '../components/molecules/va-custom-select/demo/index.vue';
import VaTabs from '../components/molecules/va-tabs/demo/index.vue';
import VaModal from '../components/molecules/va-modal/demo/index.vue';
import VaModalV2 from '../components/molecules/va-modal-v2/demo/index.vue';
import VaModalSwipe from '../components/molecules/va-modal-swipe/demo/index.vue';
import VaSnackbar from '../components/molecules/va-snackbar/demo/index.vue';
import VaAlert from '../components/molecules/va-alert/demo/index.vue';
import VaAccordion from '../components/molecules/va-accordion/demo/index.vue';
import VaChip from '../components/molecules/va-chip/demo/index.vue';
import VaBreadcrumbs from '../components/molecules/va-breadcrumbs/demo/index.vue';
import VaDropdown from '../components/molecules/va-dropdown/demo/index.vue';
import VaRange from '../components/molecules/va-range/demo/index.vue';
import VaRating from '../components/molecules/va-rating/demo/index.vue';

//Cells
import VaCardRadio from '../components/cells/va-card-radio/demo/index.vue';
import VaBottomNav from '../components/cells/va-bottom-nav/demo/index.vue';
import VaPagination from '../components/cells/va-pagination/demo/index.vue';
import VaStepper from '../components/cells/va-stepper/demo/index.vue';
import VaSkeleton from '../components/cells/va-skeleton/demo/index.vue';
import VaSidebar from '../components/cells/va-sidebar/demo/index.vue';
import AppCard from '../components/cells/app-card/demo/index.vue';

//Organisms
import floatingMenu from '../components/organisms/floating-menu/demo/index.vue';
import AppSlider from '../components/organisms/app-slider/demo/index.vue';
import AppGridFlex from '../components/organisms/app-grid-flex/demo/index.vue';

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
          path: '/va-avatar',
          name: 'VA_AVATAR',
          component: VaAvatar
        },
        {
          path: '/va-badge',
          name: 'VA_BADGE',
          component: VaBadge
        },
        {
          path: '/va-link',
          name: 'VA_LINK',
          component: VaLink
        },
        {
          path: '/va-icon',
          name: 'VA_ICON',
          component: VaIcon
        },
        {
          path: '/va-icon-svg',
          name: 'VA_ICON_SVG',
          component: VaIconSvg
        },
        {
          path: '/va-picture',
          name: 'VA_PICTURE',
          component: VaPicture
        },
        {
          path: '/va-image',
          name: 'VA_IMAGE',
          component: VaImage
        },
        {
          path: '/va-progress',
          name: 'VA_PROGRESS',
          component: VaProgress
        },
        {
          path: '/va-circular-progress',
          name: 'VA_CIRCULAR-PROGRESS',
          component: VaCircularProgress
        },
        {
          path: '/va-switch',
          name: 'VA_SWITCH',
          component: VaSwitch
        },
        {
          path: '/va-money',
          name: 'VA_MONEY',
          component: VaMoney
        }
      ]
    },
    {
      path: '/molecules',
      name: 'MOLECULES',
      component: ComponentView,
      children: [
        {
          path: '/va-input-field',
          name: 'VA_INPUT_FIELD',
          component: VaInputField
        },
        {
          path: '/va-textarea',
          name: 'VA_TEXTAREA',
          component: VaTextarea
        },
        {
          path: '/va-checkbox',
          name: 'VA_CHECKBOX',
          component: VaCheckbox
        },
        {
          path: '/va-counter',
          name: 'VA_COUNTER',
          component: VACounter
        },
        {
          path: '/va-radio',
          name: 'VA_RADIO',
          component: VaRadio
        },
        {
          path: '/va-select',
          name: 'VA_SELECT',
          component: VaSelect
        },
        {
          path: '/va-custom-select',
          name: 'VA_CUSTOM_SELECT',
          component: VaCustomSelect
        },
        {
          path: '/va-button',
          name: 'VA_BUTTON',
          component: VaButton
        },
        {
          path: '/va-tabs',
          name: 'VA_TABS',
          component: VaTabs
        },
        {
          path: '/va-modal',
          name: 'VA_MODAL',
          component: VaModal
        },
        {
          path: '/va-modal-v2',
          name: 'VA_MODALV2',
          component: VaModalV2
        },
        {
          path: '/va-modal-swipe',
          name: 'VA_MODAL_SWIPE',
          component: VaModalSwipe
        },
        {
          path: '/va-snackbar',
          name: 'VA_SNACKBAR',
          component: VaSnackbar
        },
        {
          path: '/va-alert',
          name: 'VA_ALERT',
          component: VaAlert
        },
        {
          path: '/va-accordion',
          name: 'VA_ACCORDION',
          component: VaAccordion
        },
        {
          path: '/va-chip',
          name: 'VA_CHIP',
          component: VaChip
        },
        {
          path: '/va-breadcrumbs',
          name: 'VA_BREADCRUMBS',
          component: VaBreadcrumbs
        },
        {
          path: '/va-dropdown',
          name: 'VA_DROPDOWN',
          component: VaDropdown
        },
        {
          path: '/va-range',
          name: 'VA_RANGE',
          component: VaRange
        },
        {
          path: '/va-rating',
          name: 'VA_RATING',
          component: VaRating
        }
      ]
    },
    {
      path: '/cells',
      name: 'CELLS',
      component: ComponentView,
      children: [
        {
          path: '/va-card-radio',
          name: 'VA_CARD_RADIO',
          component: VaCardRadio
        },
        {
          path: '/va-bottom-nav',
          name: 'VA_BOTTOM_NAV',
          component: VaBottomNav
        },
        {
          path: '/va-pagination',
          name: 'VA_PAGINATION',
          component: VaPagination
        },
        {
          path: '/va-stepper',
          name: 'VA_STEPPER',
          component: VaStepper
        },
        {
          path: '/va-skeleton',
          name: 'VA_SKELETON',
          component: VaSkeleton
        },
        {
          path: '/va-sidebar',
          name: 'VA_SIDEBAR',
          component: VaSidebar
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
        },
        {
          path: '/app-grid-flex',
          name: 'APP_GRID_FLEX',
          component: AppGridFlex
        }
      ]
    }
  ]
});

export default router;
