import axios from 'axios';
import React, { useState } from 'react';
import './Todo.css';

function Todo({ id, text, completed, removeDeletedTodo, onComplete }) {
    const [isChecked, setIsChecked] = useState(completed);

    const handleCheckboxChange = async () => {
        try {
            const newCheckedState = !isChecked;
            setIsChecked(newCheckedState);
            await axios.put(`https://cse204.work/todos/${id}`, { completed: newCheckedState });
        } catch (error) {
            console.error('Error updating completion status:', error);
            setIsChecked(!isChecked);
        }
    };

    return (
        <div className="todo">
            <input className="button" type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
            <div className={`todo-text ${isChecked ? 'checked' : ''}`}>
                <p>{text}</p>
            </div>
            <button className="button" onClick={() => removeDeletedTodo(id)}>x</button>
        </div>
    );
}

export default Todo;
