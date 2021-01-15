const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: '[name]-bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: path.resolve(__dirname, 'node_modules'),
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: 'file-loader',
      },
    ],
  },
  resolve: { extensions: ['.ts', '.tsx', '.js', '.json'] },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new WebpackPwaManifest({
      publicPath: '.',
      name: 'React Todo',
      short_name: 'Todo',
      start_url: '.',
      description: 'Todo list written with React',
      background_color: '#2D2F30',
      theme_color: '#3e69df',
      crossorigin: null,
      ios: true,
      includeDirectory: true,
      icons: [
        {
          src: path.resolve('src/img/icon_x1024.png'),
          sizes: [96, 128, 144, 192, 256, 384, 512], // multiple sizes
          purpose: 'maskable any',
        },
        {
          src: path.resolve('src/img/icon_x1024.png'),
          size: 1024,
          ios: 'startup',
        },
      ],
    }),
  ],
  optimization: {
    minimize: true,
  },
};
