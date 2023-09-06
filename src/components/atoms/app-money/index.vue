<script lang="ts">
import { onMounted, ref, watch } from 'vue'
import MoneyUtils from '../../../utils/moneyUtils'

export default {
    name: 'app-money',
    props: {
        amount: {
            type: Number,
            required: true
        },
        currency: {
            type: String,
            default: 'EUR'
        },
        lang: {
            type: String,
            default: 'es-ES'
        }
    },
    setup(props){
        const formatedNumber = ref(undefined)

        watch(()=>(props.amount || props.currency), (newVal) => {
            formatModel()
        })

        const formatModel = () => {
            const {amount, lang, currency} = props
            const result = MoneyUtils.numFormatFixToLocale(amount, lang, currency)

            formatedNumber.value = result
        }

        const configComponent = () =>{
            formatModel()
        }

        onMounted(() => {
            configComponent()
        })
        return{
            formatedNumber
        }
    }
}
</script>

<template lang="pug">
span.app-money {{ formatedNumber }}
</template>

<style lang="scss">
@import 'index';
</style>