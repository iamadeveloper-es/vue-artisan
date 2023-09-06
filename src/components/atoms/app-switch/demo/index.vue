<script lang="ts">
import {ref} from 'vue'

import AppSwitch from '../index.vue'

export default {
    name: 'app-switch-demo',
    components: {AppSwitch},

    setup(){
        const checkboxConfig = ref({
          color: 'info',
          label: 'User Jhon'
        })

        const inputVal = ref({
          status: false,
          val: '',
        })

        const handleChangeEvent = (ev) => {
          if(ev.target.checked){
            inputVal.value = {
              status: true,
              val: 'Jhon',
            }
          }
          else{
            inputVal.value = {
              status: false,
              val: ''
            }
          }
        }

        return {
          inputVal,
          checkboxConfig,
          handleChangeEvent,
        }
    }
}
</script>

<template lang="pug">
app-switch(
:activeColor="checkboxConfig.color"
:disabled="checkboxConfig.disabled"
:label="checkboxConfig.label"
v-model="inputVal"
@onChange="handleChangeEvent")
</template>