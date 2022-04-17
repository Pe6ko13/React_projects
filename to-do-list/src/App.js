import React from "react";
import "./App.css";
import TodoInput from "./components/TodoInput/TodoInput";
import TodoList from "./components/TodoList/TodoList";

function App() {
  return (
    <div className="app">
      <div className="app__todoApp">
        <TodoInput />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
