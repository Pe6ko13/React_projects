import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from "./todo-actions";

const todoReducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo => todo.id === action.payload ? {...todo, complated: !todo.completed} : )
      };
    case DELETE_TODO:
      return {};
  }
};

export default todoReducer;
