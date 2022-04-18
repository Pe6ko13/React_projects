import React from "react";
import styles from "./ToDoItem.module.css";

const ToDoItem = ({ text, clickToggle, clickDelete, completed }) => {
  return (
    <div className={styles.todoItem}>
      <span
        className={styles.todoItem__text}
        style={{ color: completed ? "green" : "red" }}
      >
        {text}
      </span>
      <div>
        <button className={styles.todoItem__toggleBtn} onClick={clickToggle}>
          CHECKED
        </button>
        <button className={styles.todoItem__deleteBtn} onClick={clickDelete}>
          DELETE
        </button>
      </div>
    </div>
  );
};

export default ToDoItem;
