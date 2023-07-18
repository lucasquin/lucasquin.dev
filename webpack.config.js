const path = require('path');

module.exports = {
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components/'),
      '@utils': path.resolve(__dirname, './src/utils/'),
      '@assets': path.resolve(__dirname, './src/assets/'),
      '@services': path.resolve(__dirname, './src/services/'),
    },
  },
};

