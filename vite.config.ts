import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from 'vite-tsconfig-paths'
import path from 'path'

export default defineConfig({
  plugins: [remix(), tsconfigPaths()],
  server: {
    proxy: {
      // Proxy permintaan API ke backend baru
      '/api': {
        target: 'http://localhost:3001', // URL backend
        changeOrigin: true,
        secure: false,
      },
    },
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './app')
    }
  }
});
