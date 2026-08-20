import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    // Three.js is inherently ~1.1MB — isolate it so it only loads when the 3D hero is in view
    chunkSizeWarningLimit: 1300,
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Three.js core — largest single chunk, loaded lazily by the 3D Hero canvas
          if (id.includes('node_modules/three/')) {
            return 'three-core'
          }
          // @react-three ecosystem (fiber, drei, postprocessing) — depends on three-core
          if (
            id.includes('node_modules/@react-three/') ||
            id.includes('node_modules/postprocessing/') ||
            id.includes('node_modules/three-mesh-bvh/')
          ) {
            return 'three-ecosystem'
          }
          // GSAP animation library — used for scroll triggers across sections
          if (id.includes('node_modules/gsap/') || id.includes('node_modules/@gsap/')) {
            return 'gsap-vendor'
          }
          // React & ReactDOM core — smallest, most cached chunk
          if (id.includes('node_modules/react/') || id.includes('node_modules/react-dom/')) {
            return 'react-vendor'
          }
          // EmailJS — only loaded when contact form is rendered
          if (id.includes('node_modules/@emailjs/')) {
            return 'emailjs-vendor'
          }
        },
      },
    },
  },
})