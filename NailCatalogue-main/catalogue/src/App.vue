<template>
  <div>
    <div>
      <header class="header">
            <Navbar/>             
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
import Navbar from './components/Navbar.vue'

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
  display: flex;
  flex-direction:column;
  background-color: #9653dd;
  padding: 0.1rem 1rem;

}
.title {
  font-size: 3rem; /* Large text */
  font-weight: bold; /* Bold font */
  color: white; /* White text color for contrast */
  margin: 0;
  display: flex;
 
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.navbar {
  display: flex;
  justify-content: left;
  padding: 0px;
  }

.nav-list {
  list-style: none;
  display: inline-flex;
  gap: 1.5rem;
  padding: 0;
  margin: 0;
}

/* Center the Add product button below the title */
.cta-button {
  margin-top: 20px;
  margin-left: 20px;
  padding: 10px 20px;
  background-color: #6931a5;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
}

.cta-button:hover {
  background-color: #9653dd;
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
  background-color:#6931a5;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.search-button:hover {
  background-color: #9653dd;
}

/* Styling for conditional sections */
.form-section {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  align-self: left;

}
</style>
