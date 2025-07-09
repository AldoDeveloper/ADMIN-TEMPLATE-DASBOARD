import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [ react() ],
  server:{ 
    open : false, 
    host : '0.0.0.0',
    port : 9000,
  },

  resolve: {
    alias: {
      "@" : resolve(__dirname, "src"),
      "@component" : resolve(__dirname, "src/components")
    },  
    extensions: ['.ts', '.js', '.tsx', ".jsx"]
  }
})
