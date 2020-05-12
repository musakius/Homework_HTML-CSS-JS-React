import React, { Component } from "react";

import Spinner from "../spinner";
import ErrorComponent from "../error-component";

import "./item-list.css";

class ItemList extends Component {
  render() {
    const { onSelectedItem, data, loading, error } = this.props;

    const errorMessage = error ? <ErrorComponent /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = !(loading || error) ? (
      <ListItemView data={data} onSelectedItem={onSelectedItem} />
    ) : null;

    return (
      <>
        {errorMessage}
        {spinner}
        {content}
      </>
    );
  }
}

const ListItemView = ({ data, onSelectedItem }) => {
  const listName = data.map((item) => {
    return (
      <li
        className="list-group-item"
        key={item.id}
        onClick={() => onSelectedItem(item.id)}
      >
        {item.name}
      </li>
    );
  });

  return <ul className="item-list list-group">{listName}</ul>;
};

export default ItemList;
