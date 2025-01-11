<template>
  <div class="bg-pink-200 text-center py-12">
    <input
      v-model="filterText"
      type="text"
      placeholder="Search..."
      class="search-input"
      @input="updateFilter"
    >
    <button
      class="search-button"
      @click="updateFilter"
    >
      Go
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['filter-products'])
const filterText = ref('')

const updateFilter = () => {
  emit('filter-products', filterText.value)
}
</script>
<style>
.bg-pink-200 {
  display: flex; 
  justify-content: flex-start; 
  align-items: center;
  padding: 20px;
  gap: 10px;
}

.bg-pink-200 p {
  margin: 0;
  font-size: 1.25rem;
  font-weight: bold;
}

.search-bar {
  display: flex;
  gap: 10px; /* Space between the search input and button */
}

.search-input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 300px;
}

.search-button {
  padding: 10px 15px;
  background-color: #ea00ff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.search-button:hover {
  background-color: #ea00ff;
}

</style>
