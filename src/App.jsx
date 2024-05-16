import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import NewTodo from './NewTodo';
import SortBar from './SortBar';
import Todo from './Todo';

function App() {
    const apiKey = "ed364e-961e37-fff5b6-b33da5-08921f";
    const apiUrl = "https://cse204.work/todos";

    axios.defaults.headers.common['x-api-key'] = apiKey;

    let [todos, setTodos] = useState([]);
    const [sortState, setSortState] = useState([]);


    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const response = await axios.get(apiUrl);
                const todosData = response.data;
                setTodos(todosData);
            } catch (error) {
                console.error('Error fetching todos:', error);
            }
        };

        fetchTodos();
    }, []);

    const addTodo = async (newTodoText) => {
        try {
            const response = await axios.post(apiUrl, { text: newTodoText });
            const newTodo = response.data;
    
            let insertIndex = 0;
            switch (sortState.type) {
                case 'text':
                    insertIndex = todos.findIndex(todo => {
                        const textA = todo.text.toUpperCase();
                        const textB = newTodo.text.toUpperCase();
                        return sortState.direction === 'ascending' ? textA > textB : textA < textB;
                    });
                    break;
                case 'date':
                    insertIndex = todos.findIndex(todo => {
                        const dateA = new Date(todo.created_at);
                        const dateB = new Date(newTodo.created_at);
                        return sortState.direction === 'ascending' ? dateA > dateB : dateA < dateB;
                    });
                    break;
                case 'completed':
                    insertIndex = todos.findIndex(todo => {
                        return sortState.direction === 'ascending' ? todo.completed > newTodo.completed : todo.completed < newTodo.completed;
                    });
                    break;
                default:
                    insertIndex = todos.length;
            }
            const updatedTodos = [...todos];
            updatedTodos.splice(insertIndex, 0, newTodo);
            setTodos(updatedTodos);
        } catch (error) {
            console.error('Error adding new todo:', error);
        }
    };
    

    const removeDeletedTodo = async (todoId) => {
        try {
            await axios.delete(`${apiUrl}/${todoId}`);
            const remainingTodos = todos.filter(todo => todo.id !== todoId);
            setTodos(remainingTodos);
        } catch (error) {
            console.error('Error deleting todo:', error);
        }
    };

    const handleCompleteTodo = async (todoId) => {
        try {
            await axios.put(`${apiUrl}/${todoId}`, { completed: true });
            const updatedTodos = todos.map(todo => todo.id === todoId ? { ...todo, completed: true } : todo);
            setTodos(updatedTodos);
        } catch (error) {
            console.error('Error completing todo:', error);
        }
    };

    const handleSort = (type, direction) => {

        if (direction !== 'ascending' && direction !== 'descending') {
            direction = 'ascending';
        }
        
        let sortedTodos;
        //console.log(direction);
        switch (type) {
            case 'text':
                sortedTodos = [...todos].sort((a, b) => {
                    const textA = a.text.toUpperCase(); // ignore upper and lowercase
                    const textB = b.text.toUpperCase();
                    return direction === 'ascending' ? textA.localeCompare(textB) : textB.localeCompare(textA);
                });
                break;
            case 'date':

                sortedTodos = [...todos].sort((a, b) => {
                    const dateA = new Date(a.created_at);
                    const dateB = new Date(b.created_at);

                    if (dateA.getTime() === dateB.getTime()) {
                        const textA = a.text.toUpperCase(); 
                        const textB = b.text.toUpperCase();
                        return direction === 'ascending' ? textA.localeCompare(textB) : textB.localeCompare(textA);
                    }
                    else{
                        return direction === 'ascending' ? dateA - dateB : dateB - dateA;
                    }
                });
                // for(let i =0; i < sortedTodos.length;i++){
                //     console.log(sortedTodos[i].created_at + " : " + sortedTodos[i].text);
                // }

                console.log("----------DONE-----------");
                
                break;
            case 'completed':
                sortedTodos = [...todos].sort((a, b) => {
                    return direction === 'ascending' ? a.completed - b.completed : b.completed - a.completed;
                });
                break;
            default:
                sortedTodos = todos;
        }
        setTodos(sortedTodos);
        setSortState({ type, direction });
    };

    return (
        <div className="container">
            <div className="main-container">
                <header>
                    <h1>To Do List:</h1>
                </header>
                <main>
                    <div id="new-todo">
                        <NewTodo addTodo={addTodo} />
                    </div>
                    <SortBar handleSort={handleSort} sortState={sortState} />
                    <div id="todo-list">
                        {todos.map(todo => (
                            <Todo
                                key={todo.id}
                                id={todo.id}
                                text={todo.text}
                                completed={todo.completed}
                                removeDeletedTodo={removeDeletedTodo}
                                onComplete={() => handleCompleteTodo(todo.id)}
                            />
                        ))}
                    </div>
                </main>
            </div>
        </div>
    );
}

export default App;
