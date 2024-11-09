// Triple slash directive on vitest docs: https://vitest.dev/guide/#configuring-vitest
/// <reference types="vitest" />
/// <reference types="vite/client" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import graphql from "vite-plugin-graphql-loader"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), graphql() ],
  test: {
    environment: "jsdom",
     globals: true,
     setupFiles: "./__tests__/setup.tsx"
  }
})
