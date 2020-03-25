import types from '../actions/action-types';

const defaultState = {
  species: [],
  speciesLoading: false,
  speciesErr: false,
  people: [],
  peopleLoading: false,
  peopleErr: false
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.FETCH_SPECIES_LOADING:
      return { ...state, speciesLoading: true };
    case types.FETCH_SPECIES_SUCCESS:
      return { ...state, species: action.payload.results, speciesLoading: false };
    case types.FETCH_SPECIES_FAILED:
      return { ...state, speciesErr: true, speciesLoading: false };
    case types.FETCH_PEOPLE_LOADING:
      return { ...state, peopleLoading: true };
    case types.FETCH_PEOPLE_SUCCESS:
      return { ...state, people: action.payload, peopleLoading: false };
    case types.FETCH_PEOPLE_FAILED:
      return { ...state, peopleErr: true, peopleLoading: false };
    default:
      return { ...state };
  }
};
