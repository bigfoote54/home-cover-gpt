const { defineConfig } = require('vitest/config')
const path = require('path')

module.exports = defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.ts',
    transformMode: {
      web: [/\.[jt]sx?$/],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
  esbuild: {
    jsx: 'automatic',
  },
})