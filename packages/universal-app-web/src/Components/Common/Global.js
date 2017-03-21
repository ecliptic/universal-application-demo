import {injectGlobal} from 'styled-components'
import {Constants} from 'universal-app-core'

const {lightGreen, darkGreen} = Constants.COLORS

injectGlobal`
  html {
    min-height: 100%;
  }

  body {
    height:100%;
    background-color: black;
    background-image: radial-gradient(${lightGreen}, ${darkGreen});
  }
`
