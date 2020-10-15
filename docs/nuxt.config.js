import theme from '@nuxt/content-theme-docs'

export default theme({
  docs: {
    primaryColor: '#ecc94b' // yellow
  },
  buildModules: [
    // https://github.com/bdrtsky/nuxt-ackee
    'nuxt-ackee'
  ],
  ackee: {
    server: 'https://ackee.nuxtjs.com',
    domainId: 'c7d09b8c-a89f-41d8-b681-b9eb4ce21fce',
    detailed: true
  }
})
