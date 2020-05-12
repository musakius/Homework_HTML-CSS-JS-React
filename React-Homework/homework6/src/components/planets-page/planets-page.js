import React from "react";
import ItemList from "../item-list";
import PlanetDetails from "../planet-details";
import SwapiService from "../../services/swapi-service";

class PlanetPage extends React.Component {
  swapiService = new SwapiService();

  state = {
    selectedItem: null,
    planet: {},
    loading: true,
    error: false,
  };

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

  componentDidMount() {
    this.swapiService
      .getAllPlanets()
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  }

  onSelectedItem = (id) => {
    this.setState({
      selectedItem: id,
    });
  };

  render() {
    const { planet, error, loading } = this.state;

    return (
      <div className="row mb2">
        <div className="col-md-6">
          <ItemList
            onSelectedItem={this.onSelectedItem}
            data={planet}
            error={error}
            loading={loading}
          />
        </div>
        <div className="col-md-6">
          <PlanetDetails selectedItem={this.state.selectedItem} />
        </div>
      </div>
    );
  }
}

export default PlanetPage;
