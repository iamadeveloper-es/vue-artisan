<script lang="ts">
export default {
  name: 'va-link'
};
</script>
<script setup lang="ts">
import { computed } from 'vue';
import VaIconSvg from '../app-icon-svg/index.vue';

const props = defineProps({
  path: {
    type: String
  },
  routeName: {
    type: String
  },
  params: {
    type: Object
  },
  queryParams: {
    type: Object
  },
  text: {
    type: String
  },
  variant: {
    type: [Array<String>, String]
  },
  icon: {
    type: String
  },
  iconSize: {
    type: String,
    default: '15px'
  },
  iconVariant: {
    type: String
  },
  iconSpace: {
    type: String
  },
  iconPosition: {
    type: String,
    validator (value) {
      return (
        value === 'right' || value === 'left' || value === 'top' || value === 'bottom'
      );
    },
    default: 'right'
  }
});
const hasIcon = computed((): Number | void => {
  return props.icon?.length;
});

const getVariant = computed((): string | string[] => {
  const variant: String | String[] | undefined = props.variant;
  return Array.isArray(variant)
    ? variant.map((item) => `va-link--${item} `)
    : variant
      ? `va-link--${variant}`
      : '';
});

const getIconPosition = computed((): string => {
  const position: string = props.iconPosition;
  return hasIcon.value ? `va-link--icon-${position}` : '';
});

const getParams = computed((): Object | undefined => {
  const params: Object | undefined = props.params;
  const obj: Object = {};

  if (params && Object.keys(params).length) {
    Object.assign(obj, { ...params });
    return obj;
  }
  return undefined;
});

const getQueryParams = computed((): Object | undefined => {
  const query: Object | undefined = props.queryParams;
  const obj: Object = {};

  if (query && Object.keys(query).length) {
    Object.assign(obj, { ...query });
    return obj;
  }
  return undefined;
});

const buildRoute = computed((): Object => {
  const name: string | undefined = props.routeName;
  const path: string | undefined = props.path;
  const route: Object = {};

  if (name) {
    Object.assign(route, { name: name });
  }

  if (path) {
    Object.assign(route, { path: path });
  }

  if (getParams.value && !path) {
    Object.assign(route, { params: { ...getParams.value } });
  }

  if (getQueryParams.value) {
    Object.assign(route, { query: { ...getQueryParams.value } });
  }

  return route;
});

</script>

<template>
<router-link
class="va-link"
:to="buildRoute"
:class="[getVariant, getIconPosition]"
>
  <span class="va-link__text" v-if="text">{{ text }}</span>
  <VaIconSvg
    v-if="hasIcon"
    :icon="icon"
    :size="iconSize"
    :space="iconSpace"
  />
</router-link>
</template>

<style lang="scss">
@import 'index';
</style>
