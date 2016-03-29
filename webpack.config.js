module.exports = {
    entry: './bootstrap.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    devtool: "source-map",
    module: {
        loaders: [
            { test: /\.css$/, loader: 'style!css' },
            { test: /\.json$/, loader: 'json-loader' },
            {
                test: /\.(jsx|js)$/,
                exclude: /node_modules/,
                loader: ['babel-loader']
            }
        ]
    }
}