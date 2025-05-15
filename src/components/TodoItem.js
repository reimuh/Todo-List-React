import React, { useState } from 'react';

export default function TodoItem({ todo, index, toggleTodo, removeTodo, updateTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleUpdate = () => {
    updateTodo(index, editText);  
    setIsEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleUpdate();
    }
  };

  return (
    <li className="todo-item">
      <button className="delete" onClick={() => removeTodo(index)}>🗑️</button>
      {isEditing ? (
        <>
          <input
            className="edit-input"
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            size={editText.length + 1}
            style={{ maxWidth: '300px' }}
            onKeyDown={handleKeyDown}  
          />
          <button className="confirm" onClick={handleUpdate}>✅</button>
        </>
      ) : (
        <>
          <button className="edit" onClick={() => {
            setIsEditing(true);
            setEditText(todo.text); 
          }}>
            ✏️
          </button>
          <span
            onClick={() => toggleTodo(index)}
            style={{
              textDecoration: todo.done ? 'line-through' : 'none',
              cursor: 'pointer'
            }}
          >
            {todo.text}
          </span>
        </>
      )}
    </li>
  );
}
