export default {
  server: {
    port: 3000
  },
  build: {
    outDir: '../dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: './src/index.html'
      },
      output: {
        assetFileNames: (assetInfo) => {
          if (/\.(png|jpe?g|gif|svg|webp|ico)$/i.test(assetInfo.name)) {
            return `assets/img/[name]-[hash][extname]`
          }
          if (/\.json$/i.test(assetInfo.name)) {
            return `assets/config/[name]-[hash][extname]`
          }
          if (/\.css$/i.test(assetInfo.name)) {
            return `assets/css/[name]-[hash][extname]`
          }
          return `assets/[name]-[hash][extname]`
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js'
      }
    },
  },
  root: 'src',
  publicDir: 'assets'
}