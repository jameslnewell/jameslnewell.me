const withImages = require('next-images');

module.exports = withImages({
  distDir: '../.next',

  env: {
    GA_ID: process.env.GA_ID,
  },

  exportPathMap: async () => {
    return {
      '/': {page: '/'},
      '/404': {page: '/_error', query: {code: '404'}},
      '/4xx': {page: '/_error', query: {code: '4xx'}},
      '/5xx': {page: '/_error', query: {code: '5xx'}},
    };
  },
});
