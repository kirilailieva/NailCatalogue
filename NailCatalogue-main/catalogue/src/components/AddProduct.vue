<template>
  <div class="form">
    <h2 class="text-xl font-bold mb-4">
      Add a New Product
    </h2>
    <form @submit.prevent="submitForm">
      <label>Name:</label>
      <input
        v-model="newProduct.name"
        type="text"
        required
      >
      <label>Image URL:</label>
      <input
        v-model="newProduct.image"
        type="url"
        required
      >
      <label>Category:</label>
      <input
        v-model="newProduct.category"
        type="text"
        required
      >
      <label>Price:</label>
      <input
        v-model="newProduct.price"
        type="number"
        min="0"
        step="0.01"
        required
      >
      <button type="submit">
        Add Product
      </button>
    </form>
  </div>
</template>

<script setup>
import { reactive, defineEmits } from 'vue'

const emit = defineEmits(['add-product'])

const newProduct = reactive({
  name: '',
  image: '',
  category: '',
  price: ''
})

const submitForm = () => {
  if (!newProduct.name || !newProduct.image || !newProduct.category || !newProduct.price) {
    alert('All fields are required!')
    return
  }
  emit('add-product', { ...newProduct })
  // Reset the form fields
  newProduct.name = ''
  newProduct.image = ''
  newProduct.category = ''
  newProduct.price = ''
}
</script>

<style>
/* Reuse the .form styles from main.css */
</style>
