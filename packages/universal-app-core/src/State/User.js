import {assoc} from 'ramda'
import {createActions, handleActions} from 'redux-actions'
import {USER_DATA_KEY} from '../Constants'

export const initialState = {
  uid: null,
  email: null,
  displayName: null,
  photoUrl: null,
  provider: null,
  token: null,
}

export const reducer = handleActions({
  SET_DISPLAY_NAME: (state, action) => {
    return assoc('displayName', action.payload, state)
  },
  SET_USER: (state, action) => action.payload,
}, initialState)

export const actions = {
  ...createActions('SET_DISPLAY_NAME', 'SET_USER', 'SIGN_IN'),

  signOut: () => dispatch => {
    dispatch(actions.setUser(initialState))
  },
}

export const middleware = {
  persistUser: storage => store => next => action => {
    // Wait for the action to be processesed
    next(action)

    // Update the user whenever it is changed
    if (action.type === 'SET_USER') {
      const data = JSON.stringify(store.getState().user)
      storage.setItem(USER_DATA_KEY, data)
    }
  },
}

export const retrieveUser = async storage => {
  const user = await storage.getItem(USER_DATA_KEY)
  if (user) return JSON.parse(user)
}
