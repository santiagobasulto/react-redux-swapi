export const LOAD_FETCHED_DATA = 'LOAD_FETCHED_DATA';
export const LOADING_DATA = 'LOADING_DATA';

require('es6-promise').polyfill();
require('isomorphic-fetch');

export let loadFetchedData = (body) => {
  return {
    type: LOAD_FETCHED_DATA,
    body: body
  };
};

export let loadingData = () => {
  return {
    type: LOADING_DATA
  };
};

export let loadMoreActors = (next) => {
  return (dispatch) => {
    dispatch(loadingData())
    fetch(next)
      .then((res) => {
        return res.json()
      }, (err) => {
        console.error("ERROR");
        console.error(err);
      })
      .then((body) => {
        dispatch(loadFetchedData(body));
      });
  }
}

export let fetchData = () => {
  return (dispatch) => {
    fetch('http://swapi.co/api/people/')
      .then((res) => {

        return res.json()
      }, (err) => {
        console.error("RROR");
        console.error(err);
      })
      .then((body) => {
        dispatch(loadFetchedData(body));
      });
  };
};
