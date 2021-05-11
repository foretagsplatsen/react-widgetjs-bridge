// const jestConfig = require("./jest.config");
const webpackConfig = require("./webpack.config");

const { removeWebpackPlugin } = require("@rescripts/utilities");
const isDevelopment = process.env.NODE_ENV !== "production";

module.exports = [
	["use-babel-config", ".babelrc"],
	isDevelopment
		? [removeWebpackPlugin("ESLintWebpackPlugin")]
		: config => config,
	{
		jest: (config) => {
			let result = Object.assign({}, config, {  });
			result.transform["^.+\\.(js|jsx|ts|tsx)$"] = "babel-jest";
			result.moduleDirectories = webpackConfig.resolve.modules;
			return result;
		},
		webpack: (webpack) => {
			webpack.resolve.modules = webpackConfig.resolve.modules;
			webpack.optimization.splitChunks = webpackConfig.optimization.splitChunks;
			webpack.optimization.runtimeChunk = webpackConfig.optimization.runtimeChunk;
			webpack.output.filename = webpackConfig.output.filename;
			webpack.resolve.alias = Object.assign({}, webpack.resolve.alias, webpackConfig.resolve.alias);

			return webpack;
		}
	}
];
