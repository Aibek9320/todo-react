import React from "react";
import Button from "../Button";

const Todo = (todo, setTodoList) => {
const handleCheck = () => {
  setTodoList()
}
const handleEdit = () => {
  setTodoList()
}
const handleDelete = () => {
  setTodoList()
}
  return (
    <li >
      <div className="time">{todo.time}</div>
      <input type="text" readOnly value={todo.СtodoText} />
      <div>
        <Button onClick={handleCheck}>выполнено</Button>
        <Button onClick={handleEdit}>изменить</Button>
        <Button onClick={handleDelete}>удалить</Button>
      </div>
    </li>
  );
};

export default Todo;
