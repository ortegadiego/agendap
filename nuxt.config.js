export default {
  ssr: false,
  srcDir: 'src',
  target: 'static',

  head: {
    title: 'yt',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
//desde aqui puedo setear el estilo para todo el sitio
  css: [
    "./src/assets/css/main.css"
  ],

  plugins: [
  ],

  components: true,

  buildModules: [
  ],

  modules: [
  ],

  build: {
  }
}
