module.exports = {
  target: "serverless",
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
        destination: 'https://www.notion.so/waterloop/Canadian-Hyperloop-Conference-Members-Recruitment-Page-10326bb7fe834e23a6a412ea04c88149',
        permanent: true,
      }
    ]
  }
};
