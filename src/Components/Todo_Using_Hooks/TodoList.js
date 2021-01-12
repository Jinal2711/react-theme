import React from 'react';

const TodoList = ({ todo, index, completeTodo, removeTodo }) => {
    const darkTheme = JSON.parse(localStorage.getItem('dark'));
    return (
        <div className="todo"
            style={{ textDecoration: todo.isCompleted ? 'line-through' : '', color: darkTheme ? 'black' : 'black' }}
        >
            {todo.text}
            <div>
                <button className="complete-btn" onClick={() => completeTodo(index)}>Complete</button>
                <button className="delete-btn" onClick={() => removeTodo(index)}>X</button>
            </div>
        </div>
    )
}
export default TodoList;