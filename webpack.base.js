module.exports = {
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: '/node_modules',
        options: {
          presets: ['es2015', 'react', 'stage-0'],
        },
      },
    ],
  },
};
