<script lang="ts">

import {computed } from 'vue'
import { useRoute } from 'vue-router'

export default {
  name: 'app-component-view',
  components: {
    
  },
  setup() {
    const route = useRoute()
    const setComponentName = computed(() => {
      return route.name?.toLowerCase()
    })

    return {
      setComponentName
    }
  }
}
</script>

<template lang="pug">
div.app-info-component.mb-6
  h1.mb-4 Vue Ui Components
  //- p Component name:
  h3.mb-3 {{setComponentName}}
  router-view
    
    
</template>
