import React from "react";
import "./App.css";
import ToDoInput from "./components/ToDoInput/ToDoInput";
import ToDoList from "./components/ToDoList/ToDoList";
import ToDoState from "./context/ToDoState";

function App() {
  return (
    <div className="app">
      <div className="app__todoApp">
        <ToDoState>
          <ToDoInput />
          <ToDoList />
        </ToDoState>
      </div>
    </div>
  );
}

export default App;
