import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { createRequire } from 'module';


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
     tailwindcss()
  ],
}); 
