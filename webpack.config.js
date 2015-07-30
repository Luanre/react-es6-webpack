module.exports = {
    context: __dirname + '/app',
    entry: {
        javascript: "./app.js",
        html: "./index.html"
    },
    output: {
        path: './build',
        filename: 'app.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ["babel"]
            },
            {
                test: /\.html$/,
                loader: "file?name=[name].[ext]",
            }
        ]
    },
    devtool: "#inline-source-map",
    devServer: {
        contentBase: "./app",
        noInfo: true, //  --no-info option
        hot: true,
        inline: true
    }
};