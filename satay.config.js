module.exports = {
  bucket: process.env.BUCKET,
  region: 'ap-southeast-2',

  groups: [
    {
      source: './.build',
      include: /\.html$/,
    },

    //cache finger-printed assets for up to 1 year
    {
      source: './.build',
      exclude: /\.html$/,
      params: {
        CacheControl: `max-age=${60 * 60 * 24 * 365.25}, public`,
      },
    },
  ],
};
