import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../actions";
import s from "./AddTask.module.css";

const AddTask = ({ text, getValue, addTask }) => {
  const onChange = ({ target: { value } }) => {
    getValue(value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addTask(text);
  };

  return (
    <form className={s["block_add_task"]} onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Add task"
        onChange={onChange}
        value={text}
      />
      <button type="submit">Add</button>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    text: state.value,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTask);
