import { resolve as _resolve, join } from "path";
import TerserPlugin from "terser-webpack-plugin";

// module.exports = (env, argv) =>
// noinspection JSUnresolvedVariable
export default (env) =>
// noinspection JSUnresolvedVariable
({
  mode: env.production ? "production" : "development",
  devtool: env.production ? "source-map" : "inline-source-map",

  context: _resolve(__dirname, "assets"),

  entry: {
    main: join(__dirname, "assets/js", "theme.js"),
  },

  target: ["browserslist"],

  output: {
    path: join(__dirname, "static/assets"),
    filename: "[name].js",
    chunkFilename: "[id].js",
    assetModuleFilename: "[hash][ext][query]",
    clean: true,
  },

  stats: "minimal",

  performance: {
    maxEntrypointSize: 400000,
    maxAssetSize: 250000,
    hints: "warning",
  },

  optimization: {
    minimize: !!env.production,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: false,
          },
        },
        extractComments: false,
      }),
    ],
    emitOnErrors: true,
    moduleIds: "deterministic",
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
    mangleWasmImports: true,
    mangleExports: "deterministic",
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        loader: "babel-loader",
        test: /\.js?$/,
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
});
