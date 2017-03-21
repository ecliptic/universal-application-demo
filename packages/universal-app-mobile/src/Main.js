import {Provider} from 'react-redux'
import React, {Component} from 'react'
import Index from './Components/Index'
import * as Store from './App/Store'

const store = Store.createStore()

export default class Main extends Component {
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}
