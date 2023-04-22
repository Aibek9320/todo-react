import React, {useState} from 'react'

const App = () => {
  const [todoText, setTodoText] = useState('')
  const [todoList, setTodoList] = useState(null)
  const generateTime = () => {
    const time = new Date()
    const hours = time.getHours()
    const minutes = time.getMinutes()
    const date = time.getDate()
    const month = time.toLocaleDateString('ru', {month: 'long'})
    return `${hours}:${minutes} ${date}/${month}`
  }
  const submitHandler = (e) => {
    e.preventDefault()
    setTodoList(todoList ? [...todoList, {
      id: todoList.at(-1).id+1,
      time: generateTime(),
      todoText: todoText
    }] : [{
      id: 0,
      time: generateTime(),
      todoText: todoText
    }])
    setTodoText('')
  }
  const inputHandler = (e) => {
    setTodoText(e.target.value)
  }
  return (
    <div className='app'>
        <div className="app-container">
            <form onSubmit={submitHandler}>
              <input type="text" placeholder='Введите задачу' value={todoText} onChange={inputHandler}/>
              <button typeof='submit'>Добавить</button>
            </form>
            <ul>
              {
                todoList && todoList.map((todo) => (
                  <li key={todo.id}>
                    <div className="time">
                      {todo.time}
                    </div>
                    <input type="text" readOnly value={todo.todoText} />
                    <div>
                      <button>выполнено</button>
                      <button>изменить</button>
                      <button>удалить</button>
                    </div>
                  </li>
                ))
              }
            </ul>
        </div>

    </div>
  )
}

export default App