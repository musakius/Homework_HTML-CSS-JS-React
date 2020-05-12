import React from "react";
import s from "./Header.module.css";

function Header({ toDo, done }) {
  return (
    <div className={s["app_header"]}>
      <h1>Todo List</h1>
      <strong>
        {toDo} more to do, {done} done
      </strong>
    </div>
  );
}

export default Header;
