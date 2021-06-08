module.exports = {
  target: "serverless"
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ['@svgr/webpack'],
    });

    return config;
  },
  async redirects() {
    return [
      {
        source: '/recruitment',
        destination: 'https://www.notion.so/Canadian-Hyperloop-Conference-Members-Recruitment-Page-ad77b0e7264848308bca2fc0c737c79a',
        permanent: true,
      }
    ]
  }
};
