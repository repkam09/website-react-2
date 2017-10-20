/*
    ./webpack.config.js
*/
const path = require('path');
module.exports = {
    entry: './src/js/index.js',
    output: {
        path: path.resolve('build/inc/js/'),
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
        ]
    }
}