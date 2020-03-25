import { connect } from 'react-redux';
import App from '../../App';
import { fetchSpecies, fetchPeople } from '../actions/species-actions';

const mapStateToProps = state => {
  return {
    species: state.appState.species,
    people: state.appState.people,
    speciesLoading: state.appState.speciesLoading,
    peopleLoading: state.appState.peopleLoading
  };
};

const mapDispatchToProps = {
  fetchSpecies,
  fetchPeople
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);