module.exports = {
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.ts',
  },
  resolve: {
    alias: {
      '@': require('path').resolve(__dirname, './'),
    },
  },
  esbuild: {
    jsx: 'automatic',
  },
}