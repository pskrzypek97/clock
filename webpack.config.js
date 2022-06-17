const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: {
		bundle: path.resolve(__dirname, 'src/js/controller.js'),
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name][contenthash].js', // will be bundle.js after entry.bundle
		clean: true, // deletes an old bundle file
		assetModuleFilename: 'src/images/[name][ext]',
	},
	devtool: 'source-map',
	devServer: {
		static: {
			directory: path.resolve(__dirname, 'dist'),
		},
		port: 3000,
		open: true, // opens window in a browser automatically
		liveReload: true,
		hot: true, // hot reload, no reloading of a page
		compress: true,
		historyApiFallback: true,
		watchFiles: ['src/*.html'],
	},
	module: {
		rules: [
			{
				test: /\.scss$/, // applies loader to any file ending with .scss
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					},
				},
			},
			{
				test: /\.(png|jpg|gif|svg|eot|ttf|woff)$/,
				type: 'asset/resource',
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader',
					},
				],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Webpack App',
			filename: 'index.html',
			template: 'src/index.html',
		}),
	],
};
