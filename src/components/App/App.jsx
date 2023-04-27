import React, {useState} from 'react'
import './App.css'
import Form from '../Form'
import Button from '../Button'
import Todolist from '../Todolist'


const App = () => {
  const [todoText, setTodoText] = useState('')
  const [todoList, setTodoList] = useState(null)
  
  
  return (
    <div className='app'>
        <div className="app-container">
            <Form 
            todoList={todoList}
            setTodoList={setTodoList}
            todoText={todoText}
            setTodoText={setTodoText}
            
            
            />
            <Button
            todoList={todoList} 
            />
            <Todolist/>
            
        </div>

    </div>
  )
}

export default App