const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');


module.exports = {
    context: path.resolve(__dirname, './app'),
    entry: {
        main: './main.js'
    },
    devtool: "source-map",
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: "[name].js"
    },
    resolve: {
        alias: {
           'vue$': 'vue/dist/vue.esm.js'
        }
     },
    performance: { hints: false },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [{
                    loader: "html-loader",
                    options: { minimize: true }
                }]
            },
            {
                test: /\.scss$/,
                use:[
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    { loader: "sass-loader" }
                ]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                query: {
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
        noInfo: false
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./index.html"
        }),
        new VueLoaderPlugin()
    ],
    optimization: {
        minimize: true,
        minimizer: [new UglifyJsPlugin({
            include: /\.min\.js$/
        })]
    }
};