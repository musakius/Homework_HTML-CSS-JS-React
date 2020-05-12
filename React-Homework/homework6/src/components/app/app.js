import React from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorButton from "../error-button";
import ErrorComponent from "../error-component";
import PeoplePage from "../people-page";
import PlanetsPage from "../planets-page";
import StarshipsPage from "../starships-page";

import "./app.css";

class App extends React.Component {
  state = {
    showRandomPlanet: true,
    error: false,
    component: "",
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet,
      };
    });
  };

  onSelectedItem = (id) => {
    this.setState({
      selectedItem: id,
    });
  };

  componentDidCatch() {
    this.setState({
      error: true,
    });
  }

  getComponent = (title) => {
    this.setState({
      component: title,
    });
  };

  renderComponent(component) {
    if (component === "Planets") {
      return <PlanetsPage />;
    } else if (component === "Starships") {
      return <StarshipsPage />;
    }
    return <PeoplePage />;
  }

  render() {
    if (this.state.error) {
      return <ErrorComponent />;
    }

    const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;
    const component = this.renderComponent(this.state.component);

    return (
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
        {component}
      </div>
    );
  }
}

export default App;
