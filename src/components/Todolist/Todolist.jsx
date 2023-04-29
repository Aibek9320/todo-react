import React from "react";
import Todo from "../Todo/Todo";

const Todolist = ({todoList, setTodoList }) => {
  return (
    <ul>
      {todoList &&
        todoList.map((todo) => (
          <Todo key={todo.id} todo={todo} setTodoList={setTodoList}/>
        ))}
    </ul> 
  )
}

export default Todolist;
