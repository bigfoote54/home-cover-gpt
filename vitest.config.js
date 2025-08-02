const { defineConfig } = require('vitest/config')
const react = require('@vitejs/plugin-react')
const path = require('path')

module.exports = defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.ts',
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
})