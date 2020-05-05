var path = require('path');

module.exports = {

    // define entry point
    entry: path.resolve(__dirname, 'src') + '/app/index.js',
    // define output point 
    output: {
        path: path.resolve(__dirname, 'dist') + '/app',
        filename: 'bundle.js',
        publicPath: '/app/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                loader: 'babel-loader',
                query: {
                    presets: ['@babel/preset-react', '@babel/preset-env', '@babel/preset-typescript']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    }
};