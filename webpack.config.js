/*
    ./webpack.config.js
*/
const path = require('path');
module.exports = {
    entry: './src/js/index.js',
    output: {
        path: path.resolve('build/js/'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
        ]
    }
}