var path = require('path');
console.log(__dirname);
module.exports = {
	
	//  Defines the entrypoint of our application.
	entry: path.resolve(__dirname, 'lib/src/app.js'),
	
	//  Bundle to a ./build/public/bundle.js file.
	output: {
		path: path.resolve(__dirname, 'build/public'),
		filename: 'bundle.js'
	},
	
	//  Use babel for anything that is *.js or *.jsx.
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				include: path.resolve(__dirname, 'lib/src'),
				exclude: /node_modules/,
				query: {
					presets: ['es2015','react']
				}
			}
		]
	}
};