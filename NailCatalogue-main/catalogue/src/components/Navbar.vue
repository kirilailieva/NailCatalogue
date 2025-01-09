<template>
  <nav class="bg-gray-800 text-white">
    <div class="container px-4 py-3 flex justify-between items-center">
      <h1 class="text-xl font-bold">
        MY CATALOGUE
      </h1>
      <ul class="flex space-x-6">
        <li>
          <a
            href="#"
            class="hover:text-gray-400"
          >Home</a>
        </li>
        <li>
          <a
            href="#"
            class="hover:text-gray-400"
          >Products</a>
        </li>
        <li>
          <a
            href="#"
            class="hover:text-gray-400"
          >About Us</a>
        </li>
        <li>
          <a
            href="#"
            class="hover:text-gray-400"
          >Contact</a>
        </li>
      </ul>
      <div class="flex items-center space-x-2">
        <input
          type="text"
          placeholder="Search..."
          class="px-2 py-1 rounded bg-gray-700 border border-gray-600 text-white"
        >
        <button class="bg-blue-500 px-3 py-1 rounded hover:bg-blue-600">
          Go
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup></script>
