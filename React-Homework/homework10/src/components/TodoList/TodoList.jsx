import React from "react";
import { connect } from "react-redux";
import s from "./TodoList.module.css";

const TodoList = ({ todo }) => {
  const elements = todo.map((item) => {
    const { id, label } = item;
    return (
      <li className={s["item"]} key={id}>
        <span className={s["todo_list"]}>{label}</span>
      </li>
    );
  });

  return <ul className={s["list_todo"]}>{elements}</ul>;
};

const mapStateToProps = (state) => {
  return {
    todo: state.data,
  };
};

export default connect(mapStateToProps)(TodoList);
