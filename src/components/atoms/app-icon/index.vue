<script lang="ts">
import { computed } from 'vue'

export default {
    name: 'app-icon',
    props: {
        icon: {
            type: [Array, String],
            required: true
        },
        size: {
            type: Number,
            default: 20
        },
        variant: {
            type: String,
        }
    },
    setup(props, context){

        const emitEvent = (ev: Event): void => {
            context.emit('iconClicked', ev)
        }

        const getVariant = computed(() => {
            const variant: string | undefined = props.variant
            return variant?.length ? `app-icon--${variant}` : ''
        })

        return{
            emitEvent,
            getVariant
        }
    }
}
</script>

<template lang="pug">
span.app-icon(
:class="getVariant, icon",
@click="emitEvent", 
:style="{'font-size': `${size}px`}")
</template>

<style lang="scss">
@import 'index';
</style>