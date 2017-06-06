import { INCREMENT_ACTION } from '../actions/index'
export default (tally = 0, action) => {
  if(action.type === INCREMENT_ACTION) {
    tally++
  }
  return tally
}


