const defaultConfig = require('./webpack.config');
const _ = require('lodash');
const path = require('path');
const webpack = require('webpack');

const config = {
    output: {
        filename: '[name].[hash].js',
        path: path.join(__dirname, 'build/assets'),
    },
    devtool: 'source-map',
    plugins: [new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    })]
}

module.exports = _.mergeWith({}, defaultConfig, config, function(obj, src) {
    if (_.isArray(obj)) {
        return obj.concat(src);
    }
});
