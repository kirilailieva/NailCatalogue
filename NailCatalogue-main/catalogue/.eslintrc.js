module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:vue/vue3-recommended', // Use Vue 3 rules instead of "essential"
    'eslint:recommended', // Recommended rules for JavaScript
    'standard' // Standard JS style guide
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'vue'
  ],
  rules: {
    'vue/script-setup-uses-vars': 'error', // Prevent unused variable warnings in <script setup>
    'vue/multi-word-component-names': 'off',
    'no-unused-vars': 'warn', // Show warnings instead of errors for unused variables
    'no-undef': 'off' // Allow Vue Composition API globals (defineProps, defineEmits, etc.)
  }
}
