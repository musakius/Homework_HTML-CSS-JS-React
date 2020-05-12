import React from "react";
import s from "./AddTask.module.css";

class AddTask extends React.Component {
  state = {
    label: "",
  };

  onChange = ({ target: { value } }) => {
    this.setState({ label: value });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onAdded(this.state.label);
    this.setState({ label: "" });
  };
  render() {
    return (
      <form className={s["block_add_task"]} onSubmit={this.onSubmit}>
        <input
          type="text"
          placeholder="Add task"
          onChange={this.onChange}
          value={this.state.label}
        />
        <button type="submit">Add</button>
      </form>
    );
  }
}

export default AddTask;
