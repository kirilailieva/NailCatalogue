<template>
  <section class="bg-pink-200 text-center py-12">
    <h2 class="text-4xl font-bold">
      Welcome to the DNKa Catalogue
    </h2>
    <p class="text-xl mt-4">
      Find your next favorite product today
    </p>
  </section>
</template>

<script setup>
const addProduct = (newProduct) => {
  products.value = [...products.value, newProduct] // Replace the array to trigger reactivity
  applyFilter()
}

</script>

  <style scoped></style>
