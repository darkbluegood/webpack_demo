const webpack = require("webpack");
const path = require("path");
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry : {
		index : __dirname + "/src/index.js"
	},
	output : {
		path : path.resolve(__dirname,'build'),
		filename : "bundle.js"
	},
	module : {
		rules : [
			{
				test : /\.js$/,
				use : {
					loader : "babel-loader",
					options : {
						presets : "es2015"
					}
				}
			},
			{
				test : /\.css$/,
				use : ExtractTextPlugin.extract({
					fallback : "style-loader",
					use : "css-loader"
				})
			},
			{
				test : /\.jpg$/,
				use : {
					loader : "url-loader",
					options : {
						limit : "1024",
						outputPath : "../images/",
						name : "[hash:8].[name].[ext]"
					}
				}
			}
		]
	},
	plugins : [
		new ExtractTextPlugin("css/style.css")
	]
}