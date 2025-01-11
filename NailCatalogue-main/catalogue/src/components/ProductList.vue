<template>
  <section class="container py-8">
    <h3 class="text-2xl font-bold text-center mb-8 ml-8">
      Products
    </h3>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
        @delete-product="deleteProduct(product.id)"
      />
    </div>
  </section>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'
import ProductCard from './ProductCard.vue'

const props = defineProps({
  products: Array
})

const emit = defineEmits(['delete-product'])

const deleteProduct = (productId) => {
  emit('delete-product', productId)
}
</script>
