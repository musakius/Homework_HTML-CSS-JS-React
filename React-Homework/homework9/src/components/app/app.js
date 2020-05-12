import React from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorButton from "../error-button";
import ErrorItem from "../error-item";
import SwapiService from "../../services/swapi-service";
import { SwapiServiceProvider } from "../../context";

import ListPersonPage from "../pages/list-person-page";
import PersonPage from "../pages/person-page";
import ListPlanetPage from "../pages/list-planets-page";
import PlanetPage from "../pages/planet-page";
import ListStarshipsPage from "../pages/list-starships-page";
import StarshipsPage from "../pages/starships-page";
import IncognitoPage from "../pages/incognito-page";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./app.css";

class App extends React.Component {
  swapiService = new SwapiService();
  state = {
    showRandomPlanet: true,
    error: false,
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet,
      };
    });
  };

  componentDidCatch() {
    this.setState({
      error: true,
    });
  }

  render() {
    if (this.state.error) {
      return <ErrorItem />;
    }

    const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;

    return (
      <SwapiServiceProvider value={this.swapiService}>
        <Router>
          <React.Fragment>
            <Header />
            {planet}

            <button
              className="toggle-planet btn btn-warning btn-lg"
              onClick={this.toggleRandomPlanet}
            >
              Toggle Random Planet
            </button>
            <ErrorButton />

            <Switch>
              <Route path="/" render={() => <h1>Welcome!</h1>} exact />
              <Route path="/people" component={ListPersonPage} exact />
              <Route path="/people/:id" component={PersonPage} />
              <Route path="/planets/" component={ListPlanetPage} exact />
              <Route path="/planets/:id" component={PlanetPage} />
              <Route path="/starships" component={ListStarshipsPage} exact />
              <Route path="/starships/:id" component={StarshipsPage} />
              <Route path="/incognito" component={IncognitoPage} />
              <Route render={() => <h1>Page not found!</h1>} />
            </Switch>
          </React.Fragment>
        </Router>
      </SwapiServiceProvider>
    );
  }
}

export default App;
