import React from "react";
import ItemList from "../item-list";
import StarshipDetails from "../starship-details";
import SwapiService from "../../services/swapi-service";

class StarshipsPage extends React.Component {
  swapiService = new SwapiService();

  state = {
    selectedItem: null,
    starships: {},
    loading: true,
    error: false,
  };

  onStarshipsLoaded = (starships) => {
    this.setState({
      starships,
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
      .getAllStarships()
      .then(this.onStarshipsLoaded)
      .catch(this.onError);
  }

  onSelectedItem = (id) => {
    this.setState({
      selectedItem: id,
    });
  };

  render() {
    const { starships, error, loading } = this.state;

    return (
      <div className="row mb2">
        <div className="col-md-6">
          <ItemList
            onSelectedItem={this.onSelectedItem}
            data={starships}
            error={error}
            loading={loading}
          />
        </div>
        <div className="col-md-6">
          <StarshipDetails selectedItem={this.state.selectedItem} />
        </div>
      </div>
    );
  }
}

export default StarshipsPage;
