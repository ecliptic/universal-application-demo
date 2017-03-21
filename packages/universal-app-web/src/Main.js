import {render} from 'react-dom'
import * as Store from './App/Store'
import Index from './Components/Index'
import React from 'react'

/**
 * Initialize the application.
 */
function main () {
  const store = Store.createStore()
  const app = mount(Index, store)

  if (module.hot) {
    const triggerReload = () => {
      // Hot reload components and reducers.
      const NextStore = require('./App/Store')
      const NextIndex = require('./Components/Index').default
      const nextStore = NextStore.createStore()

      return mount(NextIndex, nextStore)
    }
    module.hot.accept('./App/Store', triggerReload)
    module.hot.accept('./Components/Index', triggerReload)
  }

  return app
}

function mount (index, store) {
  const app = document.getElementById('app')
  render(React.createElement(index, {store}), app)
  return app
}

/**
 * Kick off application initialization.
 */
main()
