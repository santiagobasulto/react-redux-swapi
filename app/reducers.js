import {LOAD_FETCHED_DATA} from './actions';

export function swapiReducer(state, action){
  switch (action.type) {
  case LOAD_FETCHED_DATA:
    console.log(action.body);
    return {
      people: action.body.results
    }
  default:
    return {
      people: []
    };
  }
}
