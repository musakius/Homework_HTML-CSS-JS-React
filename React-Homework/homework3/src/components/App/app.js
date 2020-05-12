import React from "react";

import Header from "../Header";
import SearchPanel from "../SearchPanel";
import TodoList from "../TodoList";
import Filter from "../Filter";
import AddTask from "../TaskAdd";

import s from "./app.module.css";

class App extends React.Component {
  maxId = 4;
  state = {
    data: [
      { label: "Drink Coffee", important: true, done: false, id: 1 },
      { label: "Go to a meeting", important: false, done: false, id: 2 },
      { label: "Cash withdraw", important: false, done: false, id: 3 },
    ],
    value: "",
    filter: "All",
  };

  onDelete = (id) => {
    this.setState(({ data }) => {
      const newArr = data.filter((elem) => elem.id !== id);
      return {
        data: newArr,
      };
    });
  };

  createTodo = (label) => {
    return {
      label,
      important: false,
      done: false,
      id: ++this.maxId,
    };
  };

  onAdded = (label) => {
    this.setState(({ data }) => {
      return {
        data: [...data, this.createTodo(label)],
      };
    });
  };

  searchValue = (value) => {
    this.setState({ value });
  };

  searchTask = (data, value) => {
    if (value.length === 0) {
      return data;
    }
    return data.filter((elem) => {
      return (
        elem.label.toLowerCase().startsWith(value) ||
        elem.label.startsWith(value)
      );
    });
  };

  onFilter = (filter) => {
    this.setState({ filter });
  };

  filterTask = (data, filter) => {
    if (filter === "Active") {
      return data.filter((elem) => elem.important);
    } else if (filter === "Done") {
      return data.filter((elem) => elem.done);
    } else {
      return data;
    }
  };

  onToggle = (id) => {
    this.setState(({ data }) => {
      const newArr = data.map((elem) => {
        if (elem.id === id) {
          elem.done = !elem.done;
        }
        return elem;
      });
      return {
        data: newArr,
      };
    });
  };

  onImportant = (id) => {
    this.setState(({ data }) => {
      const newArr = data.map((elem) => {
        if (elem.id === id) {
          elem.important = !elem.important;
        }
        return elem;
      });
      return {
        data: newArr,
      };
    });
  };
  render() {
    const { data, value, filter } = this.state;
    const done = data.filter((elem) => elem.done).length;
    const toDo = data.length - done;
    const visiblesTasks = this.filterTask(this.searchTask(data, value), filter);
    return (
      <div className={s["container_todo"]}>
        <Header toDo={toDo} done={done} />
        <div className={s["block_search"]}>
          <SearchPanel searchValue={this.searchValue} />
          <Filter filter={filter} onFilter={this.onFilter} />
        </div>
        <TodoList
          todo={visiblesTasks}
          onDelete={this.onDelete}
          onImportant={this.onImportant}
          onToggle={this.onToggle}
        />
        <AddTask onAdded={this.onAdded} />
      </div>
    );
  }
}

export default App;
