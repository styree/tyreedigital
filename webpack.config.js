const HTMLWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
	entry: [
		path.join(__dirname, '/src/index.js'),
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				use: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.jsx?$/,
				use: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.(jpe?g|png|woff|woff2|eot|ttf|svg|ico)$/,
				use: 'file-loader',
				exclude: /node_modules/
			},
			{
				test: /\.svg$/,
				use: 'svg-inline-loader'
			}
		]
	},
	devServer: {
		publicPath: '/',
		contentBase: './build',
		hot: true
	},
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'compiled.js'
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: path.resolve(__dirname, './src/index.html'),
			filename: 'index.html',
			inject: 'body'
		}),
	]
};
