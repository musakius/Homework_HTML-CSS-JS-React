import React from 'react';
import './main.css';
import Header from './components/Header';
import InputSearch from './components/InputSearch';
import Filter from './components/Filter';
import TodoList from './components/TodoList';
import AddTask from './components/AddTask';

function App() {
  return (
    <div className="container_todo">
      <Header />
      <div className="block_search">
        <InputSearch />
        <Filter />
      </div>
      <TodoList />
      <AddTask />
    </div>
  );
}

export default App;
