import React from 'react';
import TodoListItem from './TodoListItem';

function TodoList() {
    const todoList = ["Drink coffee", "Go to a meeting", "Cash withdraw"];
    const addElements = todoList.map((item) => <TodoListItem key={item} todo={item}/>);
    return (
      <ul>{addElements}</ul>
    )
}

export default TodoList;