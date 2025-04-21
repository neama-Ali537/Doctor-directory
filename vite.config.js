import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Doctor-directory/', // اسم الريبو
  plugins: [react()],
})

