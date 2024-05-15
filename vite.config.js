


import { defineConfig } from 'vite';
import Inspect from 'vite-plugin-inspect';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import path from 'path';
import imageminPlugin from 'vite-plugin-imagemin';
import imageminWebp from 'imagemin-webp';
import terser from '@rollup/plugin-terser';

   

export default defineConfig({
  plugins: [
imageminPlugin({
      gifsicle: { optimizationLevel: 3 },
      optipng: { optimizationLevel: 5 },
      pngquant: { quality: [0.65, 0.9], speed: 4 },
      svgo: { plugins: [{ removeViewBox: false }] },
      // Додати обробку для конвертації у формат WebP
      async webp({ files }) {
        for (const file of files) {
          if (file.extname === '.png' || file.extname === '.jpg') {
            await imageminWebp({ quality: 75 })([file]);
          }
        }
      }
    }),

    

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
       
      }
    },
     plugins: [
        terser({
          compress: true,
          mangle: true,
          format: {
            comments: false
          }
        })
      ]
  },
  esbuild: {
    jsxFactory: 'create',
    jsxInject: 'import { create } from "../settings/create.js"',
    },
  
  base: '/Walter_House'
});



