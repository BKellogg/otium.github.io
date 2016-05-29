const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: path.join(__dirname, 'src/js/main.jsx'),
    output: {
        filename: '[name].js',
        publicPath: '/assets/'
    },
    module: {
        loaders: [{
            test: /\.jsx$/,
            loader: 'babel',
            query: {
                presets: ['react']
            },
            include: path.join(__dirname, 'src')
        }, {
            test: /\.scss$/,
            loader: 'style/useable!css?root=' + path.join(__dirname, 'src') + '!sass'
        }, {
            test: /\.(svg|woff2?|ttf|eot)$/,
            loader: 'url',
            query: {
                limit: 10000
            }
        }, {
            test: /\.md$/,
            loaders: ['html?root=' + path.join(__dirname, 'src'), 'markdown-it'],
        }, {
            test: /\.json$/,
            loader: 'json'
        }, {
            test: /\.(png|jpg)$/,
            loader: "file-loader"
        }, {
            test: /bootstrap-sass\/assets\/javascripts\//,
            loader: 'imports?jQuery=jquery'
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        modules: [
            path.join(__dirname, 'src'),
            path.join(__dirname, 'src/js'),
            path.resolve('node_modules')
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/html/index.html',
            inject: 'body',
            filename: '../index.html'
        })
    ],
    'markdown-it': {
        preset: 'default',
        html: true,
    }
}

module.exports = config;
