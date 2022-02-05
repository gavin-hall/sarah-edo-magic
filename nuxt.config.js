export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: "universal",
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "static",
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Native - like Page Transitions with Vue and Nuxt, A Travel App"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Josefin+Sans|Playfair+Display"
      }
    ]
  },
  router: {
    middleware: "pages"
  },
  /*
   ** Global CSS
   */
  css: ["@/assets/css/main.css"],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  // buildModules: ["@nuxtjs/google-fonts"],
  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/google-fonts"],
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
  googleFonts: {
    download: true,
    base64: true,
    prefetch: true,
    preconnect: true,
    preload: true,
    display: "swap",
    families: {
      "DM+Sans": true
    }
  }
};
