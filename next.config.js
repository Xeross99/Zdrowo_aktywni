/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    rules: {
      // Tailwind CSS kompilowany bezpośrednio przez Turbopack (bez PostCSS)
      '*.css': {
        loaders: ['@tailwindcss/turbopack'],
        as: '*.css',
      },
    },
  },
}

module.exports = nextConfig
