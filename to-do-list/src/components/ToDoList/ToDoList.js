import React, { useContext } from "react";
import styles from "./ToDoList.module.css";

import ToDoItem from "./ToDoItem/ToDoItem";

import TodoContext from "../../context/todo-context";

const ToDoList = () => {
  const { todos, toggleTodo, deleteTodo } = useContext(TodoContext);
  return (
    <div className={styles.todoList}>
      <h3 className={styles.todoList__title}>TO-DOS</h3>
      <div className={styles.todoList__todos}>
        {todos.map((todo) => (
          <ToDoItem
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            clickToggle={() => toggleTodo(todo.id)}
            clickDelete={() => deleteTodo(todo.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default ToDoList;
