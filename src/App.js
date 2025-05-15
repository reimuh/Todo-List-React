import React, { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (input.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: input, done: false }]);
      setInput('');
    }
  };

  const updateTodo = (index, newText) => {
    const updated = [...todos];
    updated[index].text = newText;
    setTodos(updated);
  };

  const toggleTodo = (index) => {
    const updated = [...todos];
    updated[index].done = !updated[index].done;
    setTodos(updated);
  };

  const removeTodo = (index) => {
    const updated = [...todos];
    updated.splice(index, 1);
    setTodos(updated);
  };

    const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>

      <div className="input-group">
        <input
          type="text"
          value={input}
          placeholder="Digite uma Tarefa"
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown} 
        />
        <button onClick={addTodo}>Adicionar</button>
      </div>

      <TodoList
        todos={todos}
        toggleTodo={toggleTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
}

export default App;
