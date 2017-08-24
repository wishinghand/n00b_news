module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'n00b_news',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' },
      { hid: 'description', name: 'description', content: 'The signup page for the n00b_news newsletter' },
      { name: 'description', content: 'The signup page for the n00b_news newsletter' },
      { property: 'og:title', content: 'The signup page for the n00b_news newsletter' },
      { property: 'og:site_name', content: 'n00b_news' },
      { property: 'og:url', content: 'https://n00b.news' },
      { property: 'og:type', content: 'website' },
      { property: 'og:description', content: 'The signup page for the n00b_news newsletter. A list of 7 links are sent out every week about web development and design for beginners.' },
      { property: 'og:image', content: 'img/logo.png' },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:image', content: 'img/logo.png' },
      { property: 'twitter:title', content: 'The signup page for the n00b_news newsletter' },
      { property: 'twitter:description', content: 'The signup page for the n00b_news newsletter' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'theme-color', content: '#00FF00' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#00FF00' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
