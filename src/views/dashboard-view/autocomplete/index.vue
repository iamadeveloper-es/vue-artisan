<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { useRouter, type RouteRecordRaw } from 'vue-router';

// Propiedad que recibe las rutas
const props = defineProps({
  routes: {
    type: Array,
    required: true
  }
});

// Definición del modelo de búsqueda
const search = ref(''); // Término de búsqueda
const showDropdown = ref(false); // Controla la visibilidad del desplegable

// Computada para filtrar las rutas hijas que coinciden con el término de búsqueda
const filteredRoutes = computed(() => {
  return props.routes
    .map(parent => {
      if (parent.children) {
        const matchingChildren = parent.children
          .filter(child => child.name.toLowerCase().includes(search.value.toLowerCase()));

        if (matchingChildren.length > 0) {
          return {
            ...parent,
            children: matchingChildren
          };
        }
      }
      return null;
    })
    .filter(parent => parent !== null) // Filtra los padres sin coincidencias
    .flatMap(parent => parent.children || []) // Aplanamos el array para que solo contenga los hijos que coinciden
    .map(child => ({
      ...child,
      name: child.name.replace(/^VA_/, '') // Eliminamos el prefijo "VA_"
    }));
});

// Controla el evento de cambio en el campo de búsqueda
const onInputChange = () => {
  showDropdown.value = search.value.length > 0; // Mostrar el desplegable solo cuando hay texto
};

// Acción cuando se selecciona una ruta del desplegable
const onRouteSelect = (route: RouteRecordRaw) => {
  console.log('Ruta seleccionada:', route);
  // Navegar a la ruta seleccionada usando Vue Router
  router.push(route.path);

  // Limpiar el campo de búsqueda y cerrar el desplegable
  search.value = '';
  showDropdown.value = false;
};

const hide = () => {
  search.value = '';
  showDropdown.value = false;
};

// Función para capitalizar la primera letra de las palabras
const capitalizeFirstChar = (str: string): string => {
  const firstLetter = str.charAt(0).toUpperCase();
  const text = str.slice(1).toLowerCase().replaceAll('_', ' ');
  return `${firstLetter}${text}`;
};

// Detectamos cambios en la ruta actual
const router = useRouter();

// Limpiar y cerrar el autocompletado cuando la ruta cambia
watch(() => router.currentRoute.value, () => {
  search.value = ''; // Limpiar el campo de búsqueda
  showDropdown.value = false; // Cerrar el desplegable
});
</script>

<template>
  <div class="autocomplete">
    <input
      type="text"
      v-model="search"
      @input="onInputChange"
      placeholder="Buscar componentes..."
      class="autocomplete-input"
    />
    <!-- Solo mostramos el desplegable si hay resultados filtrados -->
    <ul v-if="filteredRoutes.length && search.length > 0" class="autocomplete-list" v-click-outside="hide">
      <li
        v-for="(route, index) in filteredRoutes"
        :key="index"
        @click="onRouteSelect(route)">
        {{ capitalizeFirstChar(route.name) }}
      </li>
    </ul>
    <!-- Si no hay coincidencias, mostramos un mensaje -->
    <div v-if="filteredRoutes.length === 0 && search.length > 0" class="no-results">No se encontaron resultados</div>
  </div>
</template>

<style lang="scss" scoped>
.autocomplete {
  position: relative;
  max-width: 300px;
  margin-top: 20px;
}

.autocomplete-input {
  width: 100%;
  padding: 8px;
  font-size: 14px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

.autocomplete-list {
  font-size: 14px;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  border: 1px solid #ccc;
  background: white;
  list-style: none;
  padding: 0;
  margin: 0;
  max-height: 200px;
  overflow-y: auto;
}

.autocomplete-list li {
  padding: 8px;
  cursor: pointer;
}

.autocomplete-list li:hover {
  background-color: #f0f0f0;
}

.no-results {
  padding: 8px;
  color: #999;
}
</style>
