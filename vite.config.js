import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const PRODUCTION_BASE_PATH = process.env.VITE_BASE_PATH || '/react-demo'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? `${PRODUCTION_BASE_PATH}/` : '/',
  define: {
    __PRODUCTION_BASE_PATH__: JSON.stringify(PRODUCTION_BASE_PATH)
  }
})
