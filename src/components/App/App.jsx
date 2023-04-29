import React, { useState } from "react";
import "./App.css";
import Form from "../Form";
import Todolist from "../Todolist";

const App = () => {
  const [todoText, setTodoText] = useState("");
  const [todoList, setTodoList] = useState(null);

  return (
    <div className="app">
      <div className="app-container">
        <Form
          todoText={todoText}
          setTodoText={setTodoText}
          todoList={todoList}
          setTodoList={setTodoList}
        />
        <Todolist 
        todoList={todoList}
        setTodoList={setTodoList} 
        />
      </div>
    </div>
  );
};

export default App;
