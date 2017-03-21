import {addPlugins, createConfig, defineConstants, env, entryPoint, setOutput, sourceMaps} from '@webpack-blocks/webpack2'
import {setTarget, setNode, setExternals, envVar} from 'webpack-blocks-utils'
import babel from '@webpack-blocks/babel6'
import devServer from '@webpack-blocks/dev-server2'
import extractText from '@webpack-blocks/extract-text2'
import html from 'webpack-blocks-html'
import path from 'path'
import webpack from 'webpack'

export default createConfig([
  /**
   * Base config
   */
  entryPoint('babel-polyfill'),
  setOutput('./build/bundle.js'),
  babel(),
  defineConstants({
    'process.env.NODE_ENV': process.env.NODE_ENV || 'production',
  }),

  /**
   * The Electron renderer process
   */
  envVar('MAIN', undefined, [
    setTarget('electron-renderer'),
    setOutput({
      path: path.resolve(__dirname, './public'),
      filename: '[name].[hash:8].js',
      libraryTarget: 'commonjs2',
    }),
    html({template: 'assets/index.html'}),

    /**
     * Development mode
     */
    env('development', [
      entryPoint('react-hot-loader/patch'),
      devServer(),
      sourceMaps(),
      addPlugins([new webpack.NamedModulesPlugin()]),
    ]),

    /**
     * Production mode
     */
    env('production', [
      extractText('[name].[contenthash:8].css'),
    ]),

    // This needs to be added /after/ react-hot-loader above
    entryPoint('./src/App/Renderer.js'),
  ]),

  /**
   * The Electron main process
   */
  envVar('MAIN', 'true', [
    setTarget('electron-main'),
    entryPoint('./src/Main.js'),
    setOutput({
      path: path.resolve(__dirname, './build'),
      filename: 'main.js',
      libraryTarget: 'commonjs2',
    }),
    setNode({
      __dirname: false,
      __filename: false,
    }),
    setExternals([
      'electron-debug',
      'debug',
    ]),

    /**
     * Development mode
     */
    env('development', [
      sourceMaps(),
    ]),

    /**
     * Production mode
     */
    env('production', [
      // addPlugins([new BabiliPlugin()]),  // Minification
    ]),
  ]),

])
