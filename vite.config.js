// import Inspect from 'vite-plugin-inspect';
// import path, { resolve } from 'path'


// export default {

//     esbuild: {
//         jsxFactory: 'create',
//         jsxInject: 'import { create } from "../settings/create.js"',
//     },

//     plugins: [
//         Inspect()
//     ],
  
//     build: {
//         rollupOptions: {
//             input: {
//                 main: resolve(__dirname, 'index.html'),
//                 login: resolve(__dirname, 'pages/login/index.html'),
//             }
//         }
//     },
  
//     resolve: {
//         alias: {
//             '@': path.resolve(__dirname, './src/assets')
//         }
//     }
// };


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



// import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
// import { defineConfig } from 'vite';

// export default defineConfig(() => {
//   return {
//     plugins: [
//       ViteImageOptimizer({
//         /* pass your config */
//       }),
//     ],
//   };
// });