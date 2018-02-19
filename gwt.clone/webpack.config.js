/*
 * webpack.config.js
 */

var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

module.exports = {
    entry: './app/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js'
    },
    module: {
        rules: [
            {test: /\.(js)$/, use: 'babel-loader'},
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				loaders: [
				  'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
				  'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
				]
		  	}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'app/index.html'
        })
    ]
};
