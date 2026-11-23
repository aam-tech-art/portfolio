// Runs after `vite build`: creates page-specific HTML shells, then fills each one with
// React-rendered content. This keeps direct page loads working on GitHub Pages and Vercel.
import { readFileSync, rmSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { pathToFileURL } from 'node:url'
import { pages, pageTitle, SITE_URL } from '../src/seo.js'

const output = resolve('dist')
const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL
const siteUrl = process.env.VERCEL && productionHost ? `https://${productionHost}/` : SITE_URL
const shell = readFileSync(resolve(output, 'index.html'), 'utf8')
  .replaceAll('https://aam-tech-art.github.io/portfolio/', siteUrl)
const esc = (text) => text.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')
const withPageTags = (html, { title, description, url }) =>
  html
    .replace(/<title>.*?<\/title>/, `<title>${esc(title)}</title>`)
    .replace(/(<meta name="description" content=")[^"]*/, `$1${esc(description)}`)
    .replace(/(<meta property="og:title" content=")[^"]*/, `$1${esc(title)}`)
    .replace(/(<meta property="og:description" content=")[^"]*/, `$1${esc(description)}`)
    .replace(/(<meta property="og:url" content=")[^"]*/, `$1${url}`)
    .replace(/(<meta name="twitter:title" content=")[^"]*/, `$1${esc(title)}`)
    .replace(/(<meta name="twitter:description" content=")[^"]*/, `$1${esc(description)}`)
    .replace(/(<link rel="canonical" href=")[^"]*/, `$1${url}`)

writeFileSync(resolve(output, 'index.html'), withPageTags(shell, {
  title: pageTitle(pages[''].name),
  description: pages[''].description,
  url: siteUrl,
}))

for (const [path, page] of Object.entries(pages)) {
  if (!path) continue
  const tags = { title: pageTitle(page.name), description: page.description, url: siteUrl + path }
  writeFileSync(resolve(output, `${path}.html`), withPageTags(shell, tags))
}

const notFound = withPageTags(shell, {
  title: pageTitle('Page not found'),
  description: pages[''].description,
  url: siteUrl,
})
  .replace(/\s*<link rel="canonical"[^>]*>/, '')
  .replace('</head>', '  <meta name="robots" content="noindex" />\n  </head>')
writeFileSync(resolve(output, '404.html'), notFound)

const server = resolve('dist-ssr', 'entry-server.js')
const { paths, render } = await import(pathToFileURL(server).href)
const EMPTY_ROOT = '<div id="root"></div>'

for (const path of paths) {
  const file = resolve(output, `${path || 'index'}.html`)
  const html = readFileSync(file, 'utf8')
  if (!html.includes(EMPTY_ROOT)) throw new Error(`No empty <div id="root"> in ${file}`)
  writeFileSync(file, html.replace(EMPTY_ROOT, `<div id="root" data-page="${path}">${render(path)}</div>`))
  console.log(`pre-rendered /${path}`)
}

// The server build was only needed for this step
rmSync(resolve('dist-ssr'), { recursive: true, force: true })
