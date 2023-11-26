<script lang="ts">
import { useCommonFunctions } from '@/composables/common-functions';
import { useDeviceFunctions } from '@/composables/device-functions';
import { computed, type Ref, ref, watch, onUnmounted } from 'vue';

export default {
  name: 'app-modal-swipe',
  props: {
    closeIcon: {
      type: Array,
      default: () => ['fa-regular', 'fa-circle-xmark']
    },
    showFrom: {
      type: String,
      default: 'bottom'
    }
  },
  setup (props, context) {
    const { bodyBlocked } = useCommonFunctions();
    const { isMobileSize } = useDeviceFunctions();
    const isMobile = isMobileSize();
    const modalSwipe = ref(null);
    const modalDialog = ref(null);
    const isModalVisible: Ref<boolean> = ref(false);
    const transformPos = ref(0);
    const startPressPos = ref(0);
    const dialogPagePos = ref(0);
    const dialogSize = ref(0);
    const animationTime = ref(0);

    watch(
      () => isModalVisible.value,
      (newVal) => {
        if (newVal) {
          bodyBlocked(true);
        } else {
          bodyBlocked();
        }
      }
    );

    const getShowFrom = computed(() => {
      return `show-from-${props.showFrom}`;
    });

    const getTransformAxis = computed(() => {
      const { showFrom } = props;
      return showFrom === 'right' || showFrom === 'left' ? 'translateX' : 'translateY';
    });

    const show = (): void => {
      isModalVisible.value = true;
      bodyBlocked(true);

      setTimeout(() => {
        startProccess();
      }, 100);
    };

    const hide = (ev: Event): void => {
      const target = ev.target as HTMLInputElement;
      if (target.getAttribute('data-dismiss') === 'modal-swipe') {
        transformPos.value = 0;
        isModalVisible.value = false;
      }
    };

    const hasSlot = (name: Readonly<string>): Boolean => !!context.slots[name];

    const startProccess = () => {
      const transitionDuration = window
        .getComputedStyle(modalDialog.value)
        .transitionDuration.replace('s', '');
      animationTime.value = Math.abs(Number(transitionDuration) * 1000);
      if (isMobile) {
        onTouchStart();
        onTouchEnd();
      }
    };

    const resetModal = () => {
      isModalVisible.value = false;
      transformPos.value = 0;
      startProccess();
    };

    const onTouchStart = () => {
      modalDialog.value.addEventListener('touchstart', (ev) => {
        const target = ev.touches[0];
        console.log(modalDialog);
        if (props.showFrom === 'bottom') {
          startPressPos.value = target.clientY;
          dialogPagePos.value = modalDialog.value.offsetTop;
          dialogSize.value = modalDialog.value.clientHeight;
        } else {
          startPressPos.value = target.clientX;
          dialogPagePos.value = modalDialog.value.offsetLeft;
          dialogSize.value = modalDialog.value.clientWidth;
        }
      });
    };

    const onTouchEnd = () => {
      const { showFrom } = props;
      const pageLimit =
                showFrom === 'bottom' ? window.innerHeight - 50 : window.innerWidth - 50;
      modalDialog.value.addEventListener('touchend', (ev) => {
        const touchPosition =
                    showFrom === 'bottom'
                      ? ev.changedTouches[0].clientY
                      : ev.changedTouches[0].clientX;

        console.log(touchPosition, pageLimit);

        if (showFrom === 'bottom' || showFrom === 'right') {
          if (touchPosition > pageLimit) {
            transformPos.value = dialogSize.value;
            setTimeout(() => {
              resetModal();
            }, animationTime.value);
          }
        } else {
          if (startPressPos.value > touchPosition && touchPosition < 50) {
            transformPos.value = -dialogSize.value;
            setTimeout(() => {
              resetModal();
            }, animationTime.value);
          }
        }
      });
    };

    onUnmounted(() => {
      bodyBlocked();
      transformPos.value = 0;
      isModalVisible.value = false;
    });

    return {
      modalSwipe,
      modalDialog,
      isModalVisible,
      transformPos,
      getShowFrom,
      getTransformAxis,
      show,
      hide,
      hasSlot
    };
  }
};
</script>

<template lang="pug">
.app-modal-swipe(
ref="modalSwipe", 
@click="hide($event)", 
v-show="isModalVisible")
    .app-modal-swipe__content(data-dismiss="modal-swipe", 
    :class="getShowFrom")
        transition(name="slide-fade")
            .app-modal-swipe-dialog(
            v-show="isModalVisible",
            ref="modalDialog", 
            :class="getShowFrom"
            :style="{ transform: `${getTransformAxis}(${transformPos}px)` }")
                .app-modal-swipe-dialog__header
                    slot(name="header")
                    button(data-dismiss="modal-swipe",
                    class="app-modal-swipe-dialog__close" 
                    :class="closeIcon",  
                    @click="hide($event)")
                .app-modal-swipe-dialog__body(v-if="hasSlot('body')")
                    slot(name="body")
                .app-modal-swipe-dialog__footer(v-if="hasSlot('footer')")
                    slot(name="footer")

</template>

<style lang="scss">
@import 'index';
</style>
