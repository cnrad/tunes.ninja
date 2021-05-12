module.exports = {
    async redirects() {
      return [
        {
          source: '/invite',
          destination: '/',
          permanent: true,
        },
      ]
    },
  }