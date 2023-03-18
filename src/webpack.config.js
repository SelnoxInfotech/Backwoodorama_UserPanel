let webpack = require("webpack");
let path = require('path');

module.exports = {
    entry: {
        app: './src/app.js'
    },
    output: {
        filename: 'build/bundle.js',
        sourceMapFilename: 'build/bundle.map'
    },
    devtool: '#source-map',
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query:{
                    presets:['react', 'es2015']
                }
            }
        ]
    }
}