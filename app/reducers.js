import {LOAD_FETCHED_DATA, LOADING_DATA} from './actions';

export function swapiReducer(state, action){
  switch (action.type) {
  case LOAD_FETCHED_DATA:
    return {
      count: action.body.count,
      next: action.body.next,
      loading: false,
      people: state.people.concat(action.body.results)
    };
  case LOADING_DATA:
    return {
      count: state.count,
      next: state.next,
      loading: true,
      people: state.people
    };
  default:
    return {
      count: 0,
      next: null,
      loading: true,
      people: []
    };
  }
}
