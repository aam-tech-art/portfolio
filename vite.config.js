import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages serves this repository below /portfolio/. Vercel uses the domain root.
// Dev keeps / so the local dev server works as before.
export default defineConfig(({ command, isPreview }) => ({
  base: command === 'build' || isPreview ? (process.env.VERCEL ? '/' : '/portfolio/') : '/',
  // '@/...' imports point at src/ (used by the shadcn components)
  resolve: { alias: { '@': resolve('src') } },
  // The server build bundles its packages too, so it runs in Node without extra setup
  ssr: { noExternal: true },
  plugins: [react(), tailwindcss()],
}))
