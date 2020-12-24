const nextTranslate = require('next-translate');
const withImages = require('next-images');

module.exports = nextTranslate({
  ...withImages(),
  images: {
    domains: ['images.prismic.io']
  }
});