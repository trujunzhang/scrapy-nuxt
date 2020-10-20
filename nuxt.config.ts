import { Configuration as NuxtConfiguration } from '@nuxt/types'
import en from './locales/en.json'

const config: NuxtConfiguration = {
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    '~/assets/scrapydweb/css/dropdown.css',
    '~/assets/scrapydweb/css/icon_upload_icon_right.css',
    '~/assets/scrapydweb/css/multinode.css',
    '~/assets/scrapydweb/css/stacktable.css',
    '~/assets/scrapydweb/css/stats.css',
    '~/assets/scrapydweb/css/style.css',
    '~/assets/scrapydweb/css/utf8.css'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '@/plugins/chartist.js'
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxt/typescript-build'],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // https://github.com/gbouteiller/nuxt-element-ui
    'nuxt-element-ui',
    [
      'nuxt-i18n',
      {
        locales: ['en', 'es'],
        defaultLocale: 'en',
        vueI18n: {
          fallbackLocale: 'en',
          messages: {
            en,
            es: {
              greeting: '¡Hola mundo!'
            }
          }
        }
      }
    ]
  ],
  /*
   ** Build configuration
   */
  build: {
    extractCSS: false,
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
    }
  },
  typescript: {
    typeCheck: true
  }
}

module.exports = config
