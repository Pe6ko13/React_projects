import React, { useReducer } from "react";
import TodoContext from "./todo-context";
import todoReducer from "./todo-reducer";
import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from "./todo-actions";

const ToDoState = ({ children }) => {
  const initialState = {
    todos: [], // {id: 1, text: 'text, complate: false}
  };

  const [state, dispatch] = useReducer(todoReducer, initialState);

  const addTodo = (todo) => {
    dispatch({
      type: ADD_TODO,
      payload: todo,
    });
  };

  const toggleTodo = (todoId) => {
    dispatch({
      type: TOGGLE_TODO,
      payload: todoId,
    });
  };

  const deleteTodo = (todoId) => {
    dispatch({
      type: DELETE_TODO,
      payload: todoId,
    });
  };

  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        addTodo,
        toggleTodo,
        deleteTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default ToDoState;
