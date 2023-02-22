import React, { useContext } from 'react'
import TodoItem from '../components/TodoItem'
import { Context } from '../components/ContextProvider'

function CompletedPage() {
  const {todoList, setTodoList} = useContext(Context)

  

  
  return (
    <div>
      {
        todoList.map((item, index) => {
         return <TodoItem item={item} key={index}/>
        })
      }
      <button onClick={() => {setTodoList([])}}>Delete all</button>
    </div>
  )
}

export default CompletedPage