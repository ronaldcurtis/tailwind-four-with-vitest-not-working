import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'jsdom',
    css: true,
    setupFiles: ['./setup-test.ts'],
  },
})
