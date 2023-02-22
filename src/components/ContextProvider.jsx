import React from 'react'
import { useState } from 'react'
export const Context = React.createContext()


function ContextProvider(props) {

    const [todoList, setTodoList] = useState([])

    return (
        <div>
            <Context.Provider value={{ todoList, setTodoList }}>
                {props.children}
            </Context.Provider>
        </div>
    )
}

export default ContextProvider