import React from 'react';
import TodoItem from './TodoItem';

export default function TodoList({ todos, toggleTodo, removeTodo, updateTodo }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          index={index}
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
        />
      ))}
    </ul>
  );
}
