import React from "react";
import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorButton from "../error-button";
import ErrorItem from "../error-item";
import Row from "../row";
import SwapiService from "../../services/swapi-service";
import ErrorBoundry from "../error-boundry";
import { SwapiServiceProvider } from "../../context";
import {
  PersonList,
  PlanetList,
  StarshipsList,
  PersonDetails,
  PalnetDetails,
  StarshipsDetails,
} from "../sw-component";

import "./app.css";

class App extends React.Component {
  swapiService = new SwapiService();
  state = {
    showRandomPlanet: true,
    error: false,
    personId: null,
    planetId: null,
    starshipsId: null,
  };

  onPersonId = (id) => {
    this.setState({
      personId: id,
    });
  };

  onPlanetId = (id) => {
    this.setState({
      planetId: id,
    });
  };

  onStarshipsId = (id) => {
    this.setState({
      starshipsId: id,
    });
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet,
      };
    });
  };

  /*   componentDidCatch() {
    this.setState({
      error: true,
    });
  } */

  render() {
    if (this.state.error) {
      return <ErrorItem />;
    }

    const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;
    const { personId, planetId, starshipsId } = this.state;

    const peopleList = <PersonList onSelectedItem={this.onPersonId} />;
    const personDetails = <PersonDetails itemId={personId} />;

    const planetList = <PlanetList onSelectedItem={this.onPlanetId} />;
    const palnetDetails = <PalnetDetails itemId={planetId} />;

    const starshipsList = <StarshipsList onSelectedItem={this.onStarshipsId} />;
    const starshipsDetails = <StarshipsDetails itemId={starshipsId} />;

    return (
      <SwapiServiceProvider value={this.swapiService}>
        <div>
          <Header getComponent={this.getComponent} />
          {planet}
          <button
            className="toggle-planet btn btn-warning btn-lg"
            onClick={this.toggleRandomPlanet}
          >
            Toggle Random Planet
          </button>
          <ErrorButton />
          <Row left={peopleList} right={personDetails} />
          <Row left={planetList} right={palnetDetails} />
          <Row left={starshipsList} right={starshipsDetails} />
        </div>
      </SwapiServiceProvider>
    );
  }
}

export default App;
