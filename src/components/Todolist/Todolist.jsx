import React from "react";
import Button from "../Button";

const Todolist = ({todoList}) => {
  return (
    <ul>
      {todoList &&
        todoList.map((todo) => (
          <li key={todo.id}>
            <div className="time">{todo.time}</div>
            <input type="text" readOnly value={todo.todoText} />
            <div>
            <Button >выполнено</Button>
            <Button>изменить</Button>
            <Button>удалить</Button>
            </div>
          </li>
        ))}
    </ul>
  );
};

export default Todolist;
