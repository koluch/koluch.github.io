const {
    createConfig,
    defineConstants,
    env,
    entryPoint,
    setOutput,
    sourceMaps,
    addPlugins
} = require('@webpack-blocks/webpack2')
const devServer = require('@webpack-blocks/dev-server2')
const postcss = require('@webpack-blocks/postcss')
const extractText = require('@webpack-blocks/extract-text2')

const WebpackBuildNotifierPlugin = require('webpack-build-notifier');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

function pug() {
    return (context) => ({
        module: {
            loaders: [
                {
                    test: /\.pug$/,
                    loader: 'pug-static-loader',
                },
            ]
        },

    })
}

module.exports = createConfig([
    entryPoint({
        index: './src/index.js',
        misc: './src/misc.js',
    }),
    pug(),
    postcss([
        require('postcss-import'),
        require('postcss-css-reset'),
        require('postcss-extend'),
        require('postcss-nested'),
        require('postcss-advanced-variables'),
    ]),
    extractText('../css/[name].css'),
    addPlugins([
        new HtmlWebpackPlugin({
            filename: '../index.html',
            inject: false,
            chunks: ['index'],
            template: './src/templates/index.pug'
        }),
        new HtmlWebpackPlugin({
            inject: false,
            filename: '../misc.html',
            chunks: ['misc'],
            template: './src/templates/misc.pug'
        }),
        new CopyWebpackPlugin([
            { from: './src/images', to: '../images' }
        ])
    ]),
    defineConstants({
        'process.env.NODE_ENV': process.env.NODE_ENV
    }),
    env('development', [
        addPlugins([
            new WebpackBuildNotifierPlugin({
                title: "Build done",
                suppressSuccess: false,
                sound: false,
                failureSound: true,
            }),
        ]),
        setOutput('./build/js/[name].js'),
        sourceMaps()
    ]),
    env('production', [
        // postcss([
        //     require('autoprefixer')({ browsers: ['last 2 versions'] }),
        //     require('cssnano')({safe: true}),
        // ]),
        setOutput('./js/[name].js'),
    ])
])
