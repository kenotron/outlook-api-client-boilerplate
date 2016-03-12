var WebpackNotifierPlugin = require('webpack-notifier');
var path = require('path');

module.exports = {
    entry: path.join(__dirname, 'src/client/index.tsx'),
    devtool: 'source-map',
    output: {
        path: path.join(__dirname, 'dist/server/public'),
        publicPath: '/',
        filename: 'main.js'
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },
    plugins: [
        new WebpackNotifierPlugin()
    ], 
    module: {
        loaders: [
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            { test: /\.tsx?$/, loader: 'ts-loader' }
        ]
    }
}