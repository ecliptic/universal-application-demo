import {Store} from 'universal-app-core'

/**
 * Platform-specific createStore function. This allows middleware to be injected
 * that should only run on the web client.
 */
export function createStore () {
  return Store.createStore()
}
