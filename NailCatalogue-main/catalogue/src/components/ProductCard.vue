<template>
  <div class="product-card">
    <img
      :src="product.image"
      :alt="product.name"
    >
    <div class="product-card-content">
      <h4 class="product-card-title">
        {{ product.name }}
      </h4>
      <p class="product-card-category">
        {{ product.category || 'Category Name' }}
      </p>
      <p class="product-card-price">
        ${{ product.price || '15' }}
      </p>
      <button @click="deleteProduct" class="delete sm:py-1 sm:px-3 sm:text-sm md:py-2 md:px-4 md:text-base ">
        Delete
      </button>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({ product: Object })
const emit = defineEmits(['delete-product'])

const deleteProduct = () => {
  emit('delete-product', props.product.id)
}
</script>
