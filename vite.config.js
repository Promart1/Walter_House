


import { defineConfig } from 'vite';
import Inspect from 'vite-plugin-inspect';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import path from 'path';

export default defineConfig({
  plugins: [
    Inspect(),
    ViteImageOptimizer({
       jpg: {
    
    quality: 80,
        },
        
        png: {
    
    quality: 100,
  },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/assets')
    }
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        login: path.resolve(__dirname, 'pages/login/index.html'),
      }
    }
  },
  esbuild: {
    jsxFactory: 'create',
    jsxInject: 'import { create } from "../settings/create.js"',
    },
  
  base: '/vite'
});



