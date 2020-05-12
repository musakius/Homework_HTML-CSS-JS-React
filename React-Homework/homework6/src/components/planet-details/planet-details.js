import React, { Component } from "react";

import Spinner from "../spinner";
import SwapiService from "../../services/swapi-service";
import ErrorComponent from "../error-component";

import "./planet-details.css";

class PlanetDetails extends Component {
  state = { planet: {}, loading: false, error: false };

  swapiService = new SwapiService();

  componentDidUpdate(props) {
    const id = this.props.selectedItem;

    if (props.selectedItem !== id) {
      this.setState({ loading: true });
      this.swapiService
        .getPlanet(id)
        .then(this.onPlanetLoaded)
        .catch(this.onError);
    }
  }

  onPlanetLoaded = (planet) => {
    this.setState({
      planet,
      loading: false,
    });
  };

  onError = () => {
    this.setState({
      error: true,
      loading: false,
    });
  };

  render() {
    const { planet, loading, error } = this.state;

    const errorMessage = error ? <ErrorComponent /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = !(loading || error) ? <PlanetView planet={planet} /> : null;

    return (
      <>
        {errorMessage}
        {spinner}
        {content}
      </>
    );
  }
}

const PlanetView = ({ planet }) => {
  const { id, name, population, rotationPeriod, diameter } = planet;

  if (id) {
    return (
      <div className="planet-details card">
        <img
          className="planet-image"
          src={`https://starwars-visualguide.com/assets/img/planets/${
            id + 10
          }.jpg`}
        />
        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population: </span>
              <span>{population}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period: </span>
              <span>{rotationPeriod}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter: </span>
              <span>{diameter}</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }

  return <div className="select-planet card">Please select a planet</div>;
};

export default PlanetDetails;
