import React, { useContext, useEffect, useState } from 'react'
import TodoItem from '../components/TodoItem'
import {Context} from '../components/ContextProvider'


function HomePage() {

  const {todoList, setTodoList} = useContext(Context)


const [addValue, setAddValue] = useState('')

const handleSubmit = (e) => {
    e.preventDefault()
}

const handleChange = (e) => {
  setAddValue(e.target.value)
}

const handleAddItem = () => {
  setTodoList([...todoList, `${addValue}`])
}

useEffect(() => {
  localStorage.setItem('todoList', JSON.stringify(todoList))
},[todoList])

useEffect(() => {
  const todoList = JSON.parse(localStorage.getItem('todoList'))
  if (todoList) {
    setTodoList(todoList)
  }
},[])

  return (
    <div>
         <div>
        <form className='form' onSubmit={handleSubmit}>
            <input className='addbar' type="text" placeholder='add details' onChange={handleChange}/>
            <button className='add-btn' onClick={handleAddItem}>
                Add
            </button>
        </form>
    </div>
        {
            todoList.map((item, index) => {
                return <TodoItem key={index} item={item}/>
            })
        }
        
    </div>
  )
}

export default HomePage