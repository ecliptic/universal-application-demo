import * as Redux from 'redux'
import * as User from './User'
import thunk from 'redux-thunk'

const initialState = {
  user: User.initialState,
}
const rootReducer = Redux.combineReducers({
  user: User.reducer,
})

function devToolsEnhancer () {
  const isDefined = (typeof window === 'object' && typeof window.devToolsExtension !== 'undefined')
  // Don't enhance anything if the extension isn't found
  return isDefined ? window.devToolsExtension() : store => store
}

/**
 * Create the Redux store, customizing with optional parameters as needed.
 */
export const createStore = (middleware = [], createStoreFunc = Redux.createStore) => {
  return createStoreFunc(
    rootReducer,
    initialState,
    Redux.compose(
      Redux.applyMiddleware(thunk, ...middleware),
      devToolsEnhancer(),
    )
  )
}
