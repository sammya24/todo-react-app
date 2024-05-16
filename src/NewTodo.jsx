import React, { useState } from 'react';
import './NewTodo.css';

function NewTodo({ addTodo }) {
    const [newTodoText, setNewTodoText] = useState('');

    const handleInputChange = (event) => {
        setNewTodoText(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!newTodoText.trim()) return;

        addTodo(newTodoText);
        setNewTodoText('');
    };

    return (
        <div className="new-todo-container">
            <form id="new-todo-form" onSubmit={handleSubmit}>
                <input
                    id="new-todo-text"
                    type="text"
                    placeholder="Type task..."
                    autoFocus
                    value={newTodoText}
                    onChange={handleInputChange}
                />
                <button id="new-todo-submit" type="submit">+</button>
            </form>
        </div>
    );
}

export default NewTodo;
