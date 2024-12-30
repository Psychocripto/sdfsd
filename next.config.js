
module.exports = {
  experimental: {
    appDir: true,
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        destination: '/',
        permanent: false,
      },
    ];
  },
};
