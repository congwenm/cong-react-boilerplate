import { createStore, combineReducers } from 'redux'
import tallyReducer from '../reducers/tally'

// logs
export const log = (...args) => log.active === 0 && console.log(...args)
log.active = 2
log.info = (...args) => log.active <= 1 && console.info(...args)
log.debug = (...args) => log.active <= 2 && console.info(...args)
log.warn = (...args) => log.active <= 3 && console.info(...args)

export default window.store = () => {
  let store = createStore(
    combineReducers({
      tally: tallyReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
  store.subscribe(() => log('subscribe hit, doing something', store.getState()))
  return store
}
