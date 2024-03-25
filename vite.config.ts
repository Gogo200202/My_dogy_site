import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:"https://gogo200202.github.io/My_dogy_site/",
  plugins: [react()],
})
