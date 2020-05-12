import React from "react";
import s from "./Filter.module.css";

class Filter extends React.Component {
  onFilter = ({ target: { innerHTML } }) => {
    this.props.onFilter(innerHTML);
  };

  render() {
    const nameButtons = ["All", "Active", "Done"];

    const buttons = nameButtons.map((name) => {
      const active = this.props.filter === name;
      const style = {
        backgroundColor: active ? "rgb(40, 40, 40)" : "transparent",
        color: active ? "#fff" : "rgb(40, 40, 40)",
      };
      return (
        <button type="button" key={name} style={style}>
          {name}
        </button>
      );
    });
    return (
      <div className={s["filter"]} onClick={this.onFilter}>
        {buttons}
      </div>
    );
  }
}

export default Filter;
