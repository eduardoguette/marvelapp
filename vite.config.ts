/// <reference types="vitest" />

import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  test: { // condig
    globals: true,
    setupFiles: 'setupTests.ts',
    environment: 'happy-dom'
  }
})
