module.exports = {
    entry: './bootstrap.ts',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js',
    },
    devtool: "source-map",
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: ['style!css'] },
            { test: /\.json/, loader: ['json-loader'] },
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                loader: ['ts-loader']
            }
        ]
    }
}