import React from "react";
import s from "./SearchPanel.module.css";

class SearchPanel extends React.Component {
  onChange = ({ target: { value } }) => {
    this.props.searchValue(value);
  };
  render() {
    return (
      <input
        className={s["input_search"]}
        type="text"
        placeholder="Search"
        onChange={this.onChange}
      />
    );
  }
}

export default SearchPanel;
