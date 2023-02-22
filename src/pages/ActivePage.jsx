import React, { useContext } from 'react'
import TodoItem from '../components/TodoItem'
import { Context } from '../components/ContextProvider'

function ActivePage() {

  const {todoList} = useContext(Context)

  
  return (
    <div>
      {
        todoList.map((item, index) => {
         return <TodoItem item={item} key={index}/>
        })
      }
    </div>
  )
}

export default ActivePage