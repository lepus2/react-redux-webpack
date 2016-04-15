var Webpack = require('webpack');
var path = require('path');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var buildPath = path.resolve(__dirname, 'public', 'build');
var mainPath = path.resolve(__dirname, 'app', 'app.js');

var config = {
  devtool: 'eval',
  entry: [

    // For hot style updates
    'webpack/hot/dev-server',

    // The script refreshing the browser on none hot updates
    'webpack-dev-server/client?http://localhost:3000',

    // Our application
    mainPath],
  resolve: {
    alias: {},
    modulesDirectories: ["node_modules", "bower_components"]
  },
  output: {
    path: buildPath,
    filename: 'bundle.js',

    // Everything related to Webpack should go through a build path,
    // localhost:3000/build. That makes proxying easier to handle
    publicPath: '/build/'
  },
  module: {
    noParse: [],
    loaders: [
      {
        test   : /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader : ['babel-loader'],
        query  : {
          presets: ['react', 'es2015']
        }
      },

      // Let us also add the style-loader and css-loader, which you can
      // expand with less-loader etc.
      {
        test   : /\.scss$/,
        loaders: ["style", "css", "sass"]
      },
      {
        test   : /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader : 'file-loader'
      }
    ]
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, "app", "stylesheets")]
  },
  plugins: [
    new Webpack.HotModuleReplacementPlugin(),
    new Webpack.ResolverPlugin(
            new Webpack.ResolverPlugin.DirectoryDescriptionFilePlugin(".bower.json", ["main"])
        )
  ]
};

//config.addVendor('react', bower_dir + '/react/react.min.js');
//config.addVendor('bootstrap', bower_dir + '/bootstrap/bootstrap.min.js');
//config.addVendor('bootstrap.css', bower_dir + '/bootstrap/bootstrap.min.css')

module.exports = config;
