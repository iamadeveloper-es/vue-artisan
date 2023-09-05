<script lang="ts">
import { ref, type Ref } from 'vue'
import { useComponentFunctions } from '../../../composables/component-functions'
import AppButton from '../app-button/index.vue'

export default {
    name: 'app-modal',
    components: {AppButton},
    props: {
        backDrop: {
            type: Boolean,
            default: true
        },
        transition: {
            type: String,
            default: 'modal-fade'
        },
        closeIcon: {
            type: Array,
            default: (() => ['fa-regular', 'fa-circle-xmark'])
        }
    },
    setup(props, context){
        const {rippleEffect} = useComponentFunctions()
        const isModalVisible: Ref<boolean> = ref(false)
        const modal = ref(null)

        const show = (): void => {
            isModalVisible.value = true
        }

        const hide = (ev: Event): void => {
            const target = ev.target  as HTMLInputElement
            if(target.getAttribute('data-dismiss') === 'modal' && props.backDrop){
                isModalVisible.value = false
            }
            if(target.classList.contains('app-modal-dialog__close')){
                rippleEffect(ev, ev.target)
            }
        }

        const hasSlot = (name: Readonly<string>): Boolean => !!context.slots[name]

        return{
            rippleEffect,
            isModalVisible,
            modal,
            show,
            hide,
            hasSlot
        }
    }
}
</script>

<template lang="pug">
transition(:name="transition")
    .app-modal(
        ref="modal"
        @click="hide($event)", 
        v-show="isModalVisible")
        .app-modal__content(data-dismiss="modal")
            .app-modal-dialog
                .app-modal-dialog__header
                    slot(name="header")
                    button(
                    v-if="backDrop", 
                    data-dismiss="modal",
                    class="app-modal-dialog__close" 
                    :class="closeIcon",  
                    @click="hide($event)")
                .app-modal-dialog__body(v-if="hasSlot('body')")
                    slot(name="body")
                .app-modal-dialog__footer(v-if="hasSlot('footer')")
                    slot(name="footer")
</template>

<style lang="scss">
@import 'index';
@import 'transitions';
</style>