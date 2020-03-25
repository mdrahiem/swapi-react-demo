import types from './action-types';
import axios from 'axios';

const _fetchSpecies = (dispatch, getState) => {
  dispatch({
    type: types.FETCH_SPECIES_LOADING
  })
  axios.get(`https://swapi.co/api/species/`)
    .then(res => res.data)
    .then(resp => dispatch({
      type: types.FETCH_SPECIES_SUCCESS,
      payload: resp
    }))
    .catch(err => dispatch({
      type: types.FETCH_SPECIES_FAILED,
      payload: err
    }));
}

const getAllPeopleWithDetails = (people, dispatch, getState) => {
  if (people.length > 0) {
    Promise.all(people.map(item => {
      return axios.get(item)
        .then(resp => resp.data)
        .then(details => {
          debugger
          return details
        })
        .catch(err => err);
    }))
    .then(resp => dispatch({
      type: types.FETCH_PEOPLE_SUCCESS,
      payload: resp
    }))
    .catch(err => dispatch({
      type: types.FETCH_PEOPLE_FAILED,
      payload: err
    }));
  }
}

const _fetchPeople = (specieUrl, dispatch, getState) => {
  dispatch({
    type: types.FETCH_PEOPLE_LOADING
  })
  axios.get(specieUrl)
  .then(res => res.data)
  .then(resp => getAllPeopleWithDetails(resp.people, dispatch, getState))
  .catch(err => err);
}

export const fetchSpecies = () => {
  return async(dispatch, getState) => {
      await _fetchSpecies(dispatch, getState);
  }
}

export const fetchPeople = specieUrl => {
  return async(dispatch, getState) => {
    await _fetchPeople(specieUrl, dispatch, getState);
  }
}


  