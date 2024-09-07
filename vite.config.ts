import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import graphql from "vite-plugin-graphql-loader"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), graphql() ],
})
