const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const NpmInstallPlugin = require("npm-install-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const miniCss = require('mini-css-extract-plugin');
const minify = require('optimize-css-assets-webpack-plugin');

module.exports = (env) => {

    const isDevelopment = env.development ? true : false

    return {
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'main.js',
            pathinfo: false
        },
        mode: "none",
        watch: isDevelopment,
        devtool: true ? "cheap-source-map" : "eval",
        optimization: {
            removeAvailableModules: false,
            removeEmptyChunks: false,
            splitChunks: false,
            minimize: true,
            minimizer: [new TerserPlugin()],
        },
        module: {
            rules: [{
                    test: /\.m?js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                },
                {
                    test: /\.(png|jpe?g|gif)$/i,
                    loader: 'file-loader',
                    options: {
                        name: 'img/[name].[ext]',
                    },
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        MiniCssExtractPlugin.loader,
                        "css-loader",
                        "sass-loader",
                    ],
                },
                {
                    test: /\.(html)$/,
                    include: path.join(__dirname, 'src/views'),
                    use: {
                        loader: 'html-loader',
                        options: {
                            interpolate: true
                        }
                    }
                }
            ],
        },
        plugins: [
            new MiniCssExtractPlugin(),
            new webpack.NoEmitOnErrorsPlugin(),
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                filename: 'index.html',
                template: './src/index.html',
                minify: false,
                hash: true
            }),
        ],
    };
};