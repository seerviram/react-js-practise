import React from 'react'

function Todo({todo, completeHandler,removeHandler }) {
    const toCompleteHandler = ()=> {
        completeHandler(todo.id)
    }
    const todoremovehandler = ()=> {
        removeHandler(todo.id)
    }
  return (

           <tr>
                    <td>{todo.completed ? "X" :"O"}</td>
                    <td>{todo.taskname}</td>
                    <td>
                        <button onClick={toCompleteHandler}>Mark Completed</button>
                        <button onClick={todoremovehandler}>Remove</button>
                    </td>
                </tr>
  )
}

export default Todo
