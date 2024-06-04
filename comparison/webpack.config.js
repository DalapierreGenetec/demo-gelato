const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
    entry: './src/index.tsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: [
                    /node_modules/,
                    /__mocks/
                ]
            },
            {
                test: /\.css/i,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    devServer: {
        hot: true
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.css']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}

module.exports = config;