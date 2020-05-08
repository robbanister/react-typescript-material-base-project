var path = require('path');

module.exports = {
    // Defined entry point
    entry: './src/index.tsx',
    mode: "development",
    module: {
        rules: [
            {
                test: /\.(t|j)sx?$/,
                include: path.resolve(__dirname, 'src'),
                exclude: /(node_modules|bower_components)/,
                loader: 'awesome-typescript-loader',
                options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"]
                }
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader" },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    resolve: { extensions: [".js",'.ts','.tsx'] },
    // Defined bundled output location
    output: {
        path: path.resolve(__dirname, "dist/"),
        publicPath: "/dist/",
        filename: "bundle.js"
    },
};
