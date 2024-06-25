/* eslint-disable no-undef */

export const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };
