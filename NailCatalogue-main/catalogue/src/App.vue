<template>
  <div>
    <div>
      <header class="header">
        <h1 class="title">
          STORE
        </h1>
      </header>
    </div>
    <main>
      <!-- Toggle View Button -->
      <div class="text-center my-4">
        <button
          class="cta-button"
          @click="toggleAddProduct"
        >
          {{ isAddingProduct ? 'Go Back to Product List' : 'Add a New Product' }}
        </button>
      </div>

      <!-- Conditional Rendering -->
      <section
        v-if="isAddingProduct"
        class="form-section"
      >
        <AddProduct @add-product="addProduct" />
      </section>
      <section v-else>
        <div class="bg-pink-200 text-center py-12">
          <p class="text-xl mt-4">
            Find your next favorite Product today
          </p>
        </div>
        <ProductFilter @filter-products="filterProducts" />
        <ProductList
          :products="filteredProducts"
          @delete-product="deleteProduct"
        />
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import ProductFilter from './components/ProductFilter.vue'
import AddProduct from './components/AddProduct.vue'
import ProductList from './components/ProductList.vue'

const products = ref([]) // Start with an empty array
const filterText = ref('')
const filteredProducts = ref([])
const isAddingProduct = ref(false) // State to toggle between views

// Save Products to LocalStorage
const saveProductsToLocalStorage = () => {
  localStorage.setItem('products', JSON.stringify(products.value))
}

// Load products from LocalStorage
const loadProductsFromLocalStorage = () => {
  const storedProducts = localStorage.getItem('products')
  if (storedProducts) {
    products.value = JSON.parse(storedProducts)
  }
}

// Lifecycle hook: Load Products on app mount
onMounted(() => {
  loadProductsFromLocalStorage()
  applyFilter() // Apply the filter after loading
})

// Add a product and save to LocalStorage
const addProduct = (newProduct) => {
  products.value.push(newProduct) // Add new product to the array
  saveProductsToLocalStorage() // Save updated array to LocalStorage
  applyFilter()
}

// Delete a product and save to LocalStorage
const deleteProduct = (productId) => {
  products.value = products.value.filter((product) => product.id !== productId)
  saveProductsToLocalStorage() // Save updated array to LocalStorage
  applyFilter()
}

// Filter Products based on input text
const filterProducts = (text) => {
  filterText.value = text
  applyFilter()
}

// Apply filter logic
const applyFilter = () => {
  filteredProducts.value = products.value.filter((product) =>
    product.name.toLowerCase().includes(filterText.value.toLowerCase())
  )
}

// Toggle between Addproduct and productList views
const toggleAddProduct = () => {
  isAddingProduct.value = !isAddingProduct.value
}
</script>

<style>
.header {
  background-color: #87ceeb; /* Sky blue background */
  text-align: center; /* Center text horizontally */
  padding: 20px 0; /* Add padding for spacing */
}

.title {
  font-size: 3rem; /* Large text */
  font-weight: bold; /* Bold font */
  color: white; /* White text color for contrast */
  margin: 0; /* Remove default margin */
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

/* Center the Add product button below the title */
.cta-button {
  margin-top: 20px; /* Space below the title */
  padding: 10px 20px;
  background-color: #2563eb;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
}

.cta-button:hover {
  background-color: #cc1dd8;
}

.bg-pink-200 {
  display: flex;
  justify-content: flex-end; /* Align everything to the right */
  align-items: center; /* Center vertically */
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
  background-color: #cc1dd8;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.search-button:hover {
  background-color: #cc1dd8;
}

/* Styling for conditional sections */
.form-section {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}
</style>
