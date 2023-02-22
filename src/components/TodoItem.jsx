import React from 'react'
import { useState } from 'react'

function TodoItem({item}) {

const [isActive, setIsActive] = useState(false)
const [completed, setCompleted] = useState(false)

const handleSwitch = () => {
  setIsActive(!isActive)
  setCompleted(!completed)
}

  return (
    <div>
        <input type="checkbox"onClick={handleSwitch} />
        <label  className={isActive? 'active': 'inactive'} >
            {item.text}
        </label>
    </div>
  )
}

export default TodoItem