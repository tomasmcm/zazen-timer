const webpack = require("@nativescript/webpack");

module.exports = (env) => {
	webpack.init(env);

  webpack.Utils.addCopyRule('**/*.css')
  webpack.Utils.addCopyRule('**/*.html')
  webpack.Utils.addCopyRule('**/*.ico')
  webpack.Utils.addCopyRule('**/*.js.map')
  webpack.Utils.addCopyRule('**/*.js')
  webpack.Utils.addCopyRule('**/*.m4a')
  webpack.Utils.addCopyRule('**/*.png')
  webpack.Utils.addCopyRule('**/*.webmanifest')

	// Learn how to customize:
	// https://docs.nativescript.org/webpack

	return webpack.resolveConfig();
};


