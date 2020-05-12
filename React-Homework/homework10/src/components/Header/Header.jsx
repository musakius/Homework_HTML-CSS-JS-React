import React from "react";
import s from "./Header.module.css";

function Header() {
  return (
    <div className={s["app_header"]}>
      <h1>Todo List</h1>
    </div>
  );
}

export default Header;
