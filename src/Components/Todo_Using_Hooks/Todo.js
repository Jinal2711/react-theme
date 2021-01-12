import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const Todo = () => {
    const [todos, setTodos] = useState([
        { text: 'Learn about React', isCompleted: false },
        { text: 'Meet friend for Lunch', isCompleted: false },
        { text: 'Build really cool todo app', isCompleted: false }
    ])

    const addTodo = text => {
        const newTodos = [...todos, { text }];
        setTodos(newTodos)
    }

    const completeTodo = index => {
        const newTodos = [...todos];
        newTodos[index].isCompleted = !newTodos[index].isCompleted;
        setTodos(newTodos);
    }

    const removeTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    }
    return (
        <div className="app">
            <div className="todo-list">
                <TodoForm addTodo={addTodo} />
                {todos.map((todo, index) => (
                    <TodoList
                        key={index}
                        index={index}
                        todo={todo}
                        completeTodo={completeTodo}
                        removeTodo={removeTodo}
                    />
                ))}
            </div>
        </div>
    )
}
export default Todo;