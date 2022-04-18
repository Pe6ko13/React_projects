import React, { useState, useContext } from "react";
import styles from "./ToDoInput.module.css";
import TodoContext from "../../context/todo-context";

const ToDoInput = (e) => {
  const [todo, setTodo] = useState("");
  const { addTodo } = useContext(TodoContext);

  const onChangeHandler = (e) => {
    setTodo(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Math.random(),
      text: todo,
      completed: false,
    };

    addTodo(newTodo);

    setTodo("");
  };

  return (
    <div className={styles.todoInput}>
      <h3 className={styles.todoInput__title}>Enter a task</h3>
      <form onSubmit={onSubmitHandler} className={styles.todoInput__form}>
        <input
          className={styles.todoInput__input}
          type="text"
          value={todo}
          placeholder="Enter your task..."
          onChange={onChangeHandler}
        />
        <button className={styles.todoInput__submitBtn}>ADD</button>
      </form>
    </div>
  );
};

export default ToDoInput;
