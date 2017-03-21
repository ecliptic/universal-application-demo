import {createConfig, defineConstants, env, entryPoint, setOutput, sourceMaps} from '@webpack-blocks/webpack2'
import babel from '@webpack-blocks/babel6'
import devServer from '@webpack-blocks/dev-server2'
import html from 'webpack-blocks-html'

export default createConfig([
  entryPoint(['babel-polyfill', './src/Main.js']),
  setOutput('./build/bundle.js'),
  babel(),
  defineConstants({
    'process.env.NODE_ENV': process.env.NODE_ENV || 'production',
  }),
  html({template: 'assets/index.html'}),
  env('development', [
    devServer(),
    sourceMaps(),
  ]),
])
