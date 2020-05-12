import React, { Component } from "react";

import Spinner from "../spinner";
import SwapiService from "../../services/swapi-service";
import ErrorComponent from "../error-component";

import "./person-details.css";

class PersonDetails extends Component {
  state = { person: {}, loading: false, error: false };

  swapiService = new SwapiService();

  componentDidUpdate(props) {
    const id = this.props.selectedItem;

    if (props.selectedItem !== id) {
      this.setState({ loading: true });
      this.swapiService
        .getPerson(id)
        .then(this.onPersonLoaded)
        .catch(this.onError);
    }
  }

  onPersonLoaded = (person) => {
    this.setState({
      person,
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
    const { person, loading, error } = this.state;

    const errorMessage = error ? <ErrorComponent /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = !(loading || error) ? <PersonView person={person} /> : null;

    return (
      <>
        {errorMessage}
        {spinner}
        {content}
      </>
    );
  }
}

const PersonView = ({ person }) => {
  const { id, name, gender, birthYear, eyeColor } = person;

  if (id) {
    return (
      <div className="person-details card">
        <img
          className="person-image"
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
        />
        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender: </span>
              <span>{gender}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year: </span>
              <span>{birthYear}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color: </span>
              <span>{eyeColor}</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }

  return <div className="select-person card">Please select a person</div>;
};

export default PersonDetails;
