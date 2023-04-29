import React from "react";
import Button from "../Button";

const Form = ({ todoText, setTodoText , todoList, setTodoList}) => {
  const submitHandler = (e) => {
    e.preventDefault();
    setTodoList(
      todoList
        ? [
            ...todoList,
            {
              id: todoList.at(-1).id + 1,
              time: generateTime(),
              todoText: todoText,
            },
          ]
        : [
            {
              id: 0,
              time: generateTime(),
              todoText: todoText,
            },
          ]
    );
    setTodoText("");
  };
  const inputHandler = (e) => {
    setTodoText(e.target.value);
  };
  const generateTime = () => {
    const time = new Date();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const date = time.getDate();
    const month = time.toLocaleDateString("ru", { month: "long" });
    return `${hours}:${minutes} ${date}-${month}`;
  };
  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Введите задачу"
        value={todoText}
        onChange={inputHandler}
      />
      <Button type='submit'>добавить</Button>
      
    </form>
  );
};

export default Form;
