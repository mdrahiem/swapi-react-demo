import React, { Component, Fragment } from 'react';
import Header from './components/common/header';
import PickSpecieForm from './components/pickSpecieForm';
import ChartComponent from './components/chartComponent';
import './app.scss';

class App extends Component {
  componentDidMount() {
    this.props.fetchSpecies();
  }

  render() {
    return (
      <Fragment>
        {/* background aniimation */}
        <div className="stars"></div>
        <div className="twinkling"></div>

        <div className="app-background">
          <Header />
          <PickSpecieForm
            species={this.props.species}
            doFetchPeople={this.props.fetchPeople}
            speciesLoading={this.props.speciesLoading}
          />
          <ChartComponent
            chartData={this.props.people}
            peopleLoading={this.props.peopleLoading}
          />
        </div>
      </Fragment>
    );
  }
}

export default App;
