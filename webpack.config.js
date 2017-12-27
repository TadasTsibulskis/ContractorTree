const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const packageJson = require('./package.json');

module.exports = {
    entry: {
        [`${packageJson.name}.${packageJson.version}`]: ['./localTest/js/index.js']
    },
    devtool: 'source-map',
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'less-loader']
                })
            }
        ]
    },
    output: {
        filename: 'js/[name].min.js',
        path: path.join(__dirname, 'dist')
    },
    plugins: [
        new ExtractTextPlugin('css/[name].min.css'),
        new HtmlWebpackPlugin({
            template: './localTest/index.html'
        }),
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 9000,
        proxy: {
            '/api': 'http://api.overstock.com'
        }
    }
};