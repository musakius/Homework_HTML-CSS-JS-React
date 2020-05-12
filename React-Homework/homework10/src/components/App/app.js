import React from "react";
import Header from "../Header";
import TodoList from "../TodoList";
import AddTask from "../TaskAdd";
import s from "./app.module.css";

const App = () => {
  return (
    <div className={s["container_todo"]}>
      <Header />
      <TodoList />
      <AddTask />
    </div>
  );
};

export default App;
