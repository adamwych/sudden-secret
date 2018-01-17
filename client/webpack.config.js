const webpack = require('webpack')
const path = require('path')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const globImporter = require('node-sass-glob-importer')

const exportSass = new ExtractTextPlugin({
    filename: 'css/app.css'
})

module.exports = {
    watch: true,
    entry: [ './src/Bootstrap.js', './sass/_import.scss' ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: path.join('js', 'app.bundle.js')
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader'
            },

            {
                test: /\.scss$/,
                loader: exportSass.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader',
                        'postcss-loader',
                        {
                            loader: 'sass-loader',
                            options: {
                                importer: globImporter()
                            }
                        }
                    ]
                })
            }
        ]
    },

    plugins: [
        new ProgressBarPlugin(),
        new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'public', 'index.html') }),

        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: path.join('js', 'vendor.bundle.js'),
            minChunks(module, count) {
                return module.context && module.context.indexOf('node_modules') >= 0
            }
        }),

        exportSass
    ],

    resolve: {
        modules: [
            path.resolve(__dirname, 'src'),
            path.resolve(__dirname, 'node_modules')
        ],
        extensions: ['.js']
    }
}
