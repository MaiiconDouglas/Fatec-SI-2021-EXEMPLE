export default {
  ssr: false,
  target: "static",

  /*
   ** Headers of the page
   ** Doc: https://vue-meta.nuxtjs.org/api/#metainfo-properties
   */
  head: {
    title: "Nuxt.js starter for CSB",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Official Nuxt.js starter for CodeSandBox"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  i18n: {
    strategy: "no_prefix",
    detectBrowserLanguage: {
      useCookie: true
    },
    locales: [
      {
        code: "en",
        file: "en-US.js",
        name: "English"
      },
      {
        code: "pt",
        file: "pt-BR.js",
        name: "Português"
      }
    ],
    langDir: "locales",
    defaultLocale: "en",
    vueI18n: {
      dateTimeFormats: {
        en: {
          dateOnly: {
            year: "numeric",
            month: "short",
            day: "numeric"
          },

          dateTime: {
            year: "numeric",
            month: "numeric",
            day: "numeric",
            hour: "numeric",
            minute: "numeric"
          }
        },

        pt: {
          dateOnly: {
            year: "numeric",
            month: "numeric",
            day: "numeric"
          },

          dateTime: {
            year: "numeric",
            month: "numeric",
            day: "numeric",
            hour: "numeric",
            minute: "numeric"
          }
        }
      },

      numberFormats: {
        en: {
          currency: {
            style: "currency",
            currency: "USD",
            currencyDisplay: "symbol"
          }
        },

        pt: {
          currency: {
            style: "currency",
            currency: "BRL",
            currencyDisplay: "symbol"
          }
        }
      }
    }
  },

  /*
   ** Nuxt.js modules
   ** Doc: https://modules.nuxtjs.org
   */
  modules: [
    "@nuxtjs/i18n",
    "@nuxtjs/axios",

    [
      "nuxt-vuex-localstorage",
      {
        localStorage: ["counter"]
      }
    ]
  ],

  /*
   ** Nuxt.js modules
   ** Doc: https://nuxtjs.org/docs/configuration-glossary/configuration-modules#buildmodules
   */
  buildModules: ["@nuxtjs/tailwindcss"],

  /*
   ** Global CSS
   ** Doc: https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-css
   */
  css: ["~/assets/css/global.css"],

  /*
   ** Plugins to load before mounting the App
   ** Doc: https://nuxtjs.org/docs/2.x/directory-structure/plugins
   */
  plugins: [
    "~/plugins/vue-notification.js",
    "~/plugins/vue-content-placeholders.js"
  ]
};
