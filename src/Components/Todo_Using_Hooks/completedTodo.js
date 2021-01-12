import React from 'react';

const CompletedTodo = ({index, todos}) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
}

export default CompletedTodo