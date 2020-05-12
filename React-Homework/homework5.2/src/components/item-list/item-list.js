import React, { Component } from "react";

import Spinner from "../spinner";
import SwapiService from "../../services/swapi-service";
import ErrorComponent from "../error-component";

import "./item-list.css";

class ItemList extends Component {
  swapiService = new SwapiService();

  state = {
    people: {},
    loading: true,
    error: false,
  };

  constructor() {
    super();
    this.updatePeople();
  }

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

  updatePeople() {
    this.swapiService
      .getAllPeople()
      .then(this.onPeopleLoaded)
      .catch(this.onError);
  }

  render() {
    const { people, loading, error } = this.state;

    const errorMessage = error ? <ErrorComponent /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = !(loading || error) ? <PeopleView people={people} /> : null;
    return (
      <>
        {errorMessage}
        {spinner}
        {content}
      </>
    );
  }
}

const PeopleView = ({ people }) => {
  const listName = people.map((item) => {
    return (
      <li className="list-group-item" key={item.name}>
        {item.name}
      </li>
    );
  });

  return <ul className="item-list list-group">{listName}</ul>;
};

export default ItemList;
