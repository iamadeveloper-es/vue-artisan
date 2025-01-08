<script lang="ts">
export default {
  name: 'va-pagination'
};
</script>
<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useRoute } from 'vue-router';

const props = defineProps({
  totalPages: {
    type: [String, Number],
    required: true
  },
  pagesToShow: {
    type: Number,
    default: 4
  },
  routeName: {
    type: String
  },
  previousIncon: {
    type: [String, Array],
    default: (() => ['fa-solid', 'fa-angle-left'])
  },
  nextIncon: {
    type: [String, Array],
    default: (() => ['fa-solid', 'fa-angle-right'])
  },
  firstPageIncon: {
    type: [String, Array],
    default: (() => ['fa-solid', 'fa-angles-left'])
  },
  lastPageIncon: {
    type: [String, Array],
    default: (() => ['fa-solid', 'fa-angles-right'])
  }
});
// const total = ref();
const selectedPage = ref(1);
// const button = ref(null);
const router = useRouter();
const route = useRoute();
const routeNameVal = ref();

watch(() => route.query, (newVal) => {

  if(newVal){
    selectedPage.value = newVal.page ? Number(newVal.page) : 1;
    emitVal();
  }

});

const computedTotal = computed(() => {
  return [...Array(Number(props.totalPages)).keys()].map(item => ++item);
});

const filteredPages = computed(() => {
  const filtered = selectedPage.value >= props.pagesToShow ?
    computedTotal.value.slice(selectedPage.value - 2, selectedPage.value + 1) :
    computedTotal.value.slice(0, props.pagesToShow);
  return filtered;
});

const showRightDots = computed(() => selectedPage.value < computedTotal.value.length);
const showLeftDots = computed(() => selectedPage.value >= props.pagesToShow);

const setSelectedPage = (item: string) => {
  selectedPage.value = Number(item);
  navigate();
};

const previousPage = () => {
  if(selectedPage.value != 1){
    selectedPage.value = selectedPage.value - 1;
    navigate();
  }
};

const nextPage = () => {
  if(selectedPage.value != computedTotal.value.length){
    selectedPage.value = selectedPage.value + 1;
    navigate();
  }
};

const goToFirstPage = () => {
  selectedPage.value = 1;
  navigate();
};

const goToLastPage = () => {
  selectedPage.value = computedTotal.value.length;
  navigate();
};

const emit = defineEmits(['update']);

const emitVal = () => {
  emit('update', selectedPage.value);
};

const navigate = () => {
  // router.push({name: props.routeName, query: {page: selectedPage.value}});
  router.push({name: routeNameVal.value, query: {page: selectedPage.value}});
};

const configComponent = () => {
  // total.value = [...Array(Number(props.totalPages)).keys()].map(item => ++item);
  selectedPage.value = route.query?.page ? Number(route.query.page) : 1;
  routeNameVal.value = props.routeName ? props.routeName :route.name;
  emitVal();
};

onMounted(() => {
  configComponent();
});
</script>

<template>

<nav class="va-pagination" v-if="computedTotal">
  <ul class="va-pagination__list">
    <li class="va-pagination__list-item">
      <button class="va-pagination__button" @click="goToFirstPage()" :disabled="selectedPage == 1"><span :class="firstPageIncon"></span></button>
    </li>
    <li class="va-pagination__list-item">
      <button class="va-pagination__button" @click="previousPage()" :disabled="selectedPage == 1"><span :class="previousIncon"></span></button>
    </li>
    <li class="va-pagination__list-item dots" v-if="showLeftDots"><span class="va-pagination__button dots">...</span></li>
    <li class="va-pagination__list-item" v-for="(page, index) in filteredPages" :key="index">
      <button class="va-pagination__button" @click="setSelectedPage(page)" :class="{'active' : selectedPage == page}"><span>{{ page }}</span></button>
    </li>
    <li class="va-pagination__list-item dots" v-if="showRightDots"><span class="va-pagination__button dots">...</span></li>
    <li class="va-pagination__list-item">
      <button class="va-pagination__button" @click="nextPage()" :disabled="selectedPage == totalPages"><span :class="nextIncon"></span></button>
    </li>
    <li class="va-pagination__list-item">
      <button class="va-pagination__button" @click="goToLastPage()" :disabled="selectedPage == totalPages"><span :class="lastPageIncon"></span></button>
    </li>
  </ul>
</nav>
</template>

<style lang="scss">
@import 'index';
</style>
