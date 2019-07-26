const path = require('path');

module.exports = {
    mode: process.env.NODE_ENV,
    entry: path.join(__dirname, 'src', 'client', 'index.js' ),
    output: {
        publicPath: path.join(__dirname, 'dist'),
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options:{
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            },
            {
                test: /\.s?css$/,
                exclude: /node_modules/,
                loaders: ['style-loader', 'css-loader']
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        publicPath: '/dist/',
        proxy: {
            '/api':"http://localhost:3000"
        }

    }
}