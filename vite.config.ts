import react from '@vitejs/plugin-react-swc';
import * as path from "path";
import { defineConfig } from 'vite';

//  https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    },
  },
  plugins: [react()],
})
