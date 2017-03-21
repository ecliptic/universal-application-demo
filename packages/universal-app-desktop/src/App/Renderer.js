import {render} from 'react-dom'
import * as Store from './Store'
import React from 'react'
import {Components} from 'universal-app-web'

/**
 * Initialize the application.
 */
function main () {
  const store = Store.createRendererStore()
  const app = mount(Components.Index, store)

  if (module.hot) {
    const triggerReload = () => {
      // Hot reload components and reducers.
      const NextStore = require('./Store')
      const NextComponents = require('universal-app-web').Components
      const nextStore = NextStore.createRendererStore()

      return mount(NextComponents.Index, nextStore)
    }
    module.hot.accept('./Store', triggerReload)
    module.hot.accept('universal-app-web', triggerReload)
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
