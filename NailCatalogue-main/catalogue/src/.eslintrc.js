module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:vue/vue3-recommended', 
    'eslint:recommended'
  ],
  parser: 'vue-eslint-parser', 
  parserOptions: {
    parser: '@babel/eslint-parser', 
    ecmaVersion: 12,
    sourceType: 'module',
    requireConfigFile: false 
  },
  plugins: [
    'vue'
  ],
  rules: {
    'vue/script-setup-uses-vars': 'error', 
    'vue/multi-word-component-names': 'off', 
    'no-unused-vars': 'warn',
    'no-undef': 'off'
  }
};

