import React from "react";
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import SwapiService from "../../services/swapi-service";

class PeoplePage extends React.Component {
  swapiService = new SwapiService();

  state = {
    selectedItem: null,
    people: {},
    loading: true,
    error: false,
  };

  onPeopleLoaded = (people) => {
    this.setState({
      people,
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
      .getAllPeople()
      .then(this.onPeopleLoaded)
      .catch(this.onError);
  }

  onSelectedItem = (id) => {
    this.setState({
      selectedItem: id,
    });
  };

  render() {
    const { people, error, loading } = this.state;

    return (
      <div className="row mb2">
        <div className="col-md-6">
          <ItemList
            onSelectedItem={this.onSelectedItem}
            data={people}
            error={error}
            loading={loading}
          />
        </div>
        <div className="col-md-6">
          <PersonDetails selectedItem={this.state.selectedItem} />
        </div>
      </div>
    );
  }
}

export default PeoplePage;
