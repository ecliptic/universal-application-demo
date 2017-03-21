import {Store} from 'universal-app-core'

/**
 * Main process createStore function
 */
export function createMainStore () {
  return Store.createStore()
}

/**
 * Renderer process createStore function
 */
export function createRendererStore () {
  return Store.createStore()
}
