const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// Output extracted CSS to a file
  const extractCSSPlugin = new ExtractTextPlugin({
    // `allChunks` is needed to extract from extracted chunks as well.
    allChunks: true,
    filename: 'client.css',
  });

module.exports = {
    entry: './app/client.js',
    output: {
      path: path.resolve(__dirname, 'app/dist'),
      filename: 'client.bundle.js',
    },
    resolve: {
        alias: {
            Src: path.resolve(__dirname, 'app/src/'),
        },
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: extractCSSPlugin.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {autoprefixer: false, sourceMap: true, importLoaders: 1},
                        },
                        'postcss-loader',
                    ],
                    fallback: 'style-loader',
                }),
            },
        ],
    },
    plugins: [
        extractCSSPlugin,
    ],
};
