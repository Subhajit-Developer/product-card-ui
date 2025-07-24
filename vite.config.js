// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/product-card-ui/', // 👈 Must match your repo name
  plugins: [react()],
})
