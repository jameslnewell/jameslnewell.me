const withImages = require('next-images');
const withTypescript = require('@zeit/next-typescript');

module.exports = withTypescript(withImages({distDir: '../.next'}));
