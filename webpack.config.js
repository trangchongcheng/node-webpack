//Webpack requires this to work with directories
import path from "path";
import nodeExternals from 'webpack-node-externals';
export default {
  entry: "./index.js",
  output: {
    path: path.resolve(path.resolve(), "dist"),
    filename: "bundle.js",
  },
  // target: 'node', // in order to ignore built-in modules like path, fs, etc.
  externalsPresets: { node: true }, 
  externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  // plugins: [
	// 	new NodePolyfillPlugin()
	// ],
  mode: "development",
};
