import React from 'react'
import "./Todo.css"
import Todo from './Todo';
const todoList = [
    {
        id: 1,
        taskname: "slack team migration",
        completed: false
    }
    ,  {
        id: 2,
        taskname: "Quick create",
        completed: false
    }
    ,  {
        id: 3,
        taskname: "Channel meeting migration",
        completed: false
    }
    , {
        id: 4,
        taskname: "app support in sc pc",
        completed: false
    }
    , {
        id: 5,
        taskname: "order management",
        completed: false
    },
    {
        id: 6,
        taskname: "red vest orders",
        completed: false
    }
]

function Todos() {

    const [todos, setTodos] = React.useState(todoList);
    const inputref = React.useRef(null);

    const addTodoHandler = ()=> {
        setTodos([...todos, {
            id: todos.length,
            taskname: inputref.current.value,
            completed: false
        }])
        inputref.current.value = ""
    }

    const completeHandler = (id)=> {
        let allTodos = [...todos];
        allTodos.find(todo=> todo.id === id).completed = true
        setTodos(allTodos)
    }
    const removeHandler = (id)=> {
        let allTodos = [...todos];
        const todoIndex = allTodos.findIndex(todo=> todo.id === id);
        allTodos.splice(todoIndex, 1)
        setTodos(allTodos)
    }

  return (
    <div className='body'>
    <div className='text'>
       <input type="text" ref= {inputref}/>
       <button onClick={addTodoHandler}>Add todo</button>
    </div>
        <table className='tablecontainer'>
            <tbody>
            <tr>
                <td>taskstatus</td>
                <td>task name</td>
                <td>action</td>
            </tr>

            {todos.map((todo,index)=> (
               <Todo todo={todo}
                completeHandler={completeHandler} 
                removeHandler={removeHandler} key={index}/>
            ))}
            </tbody>
          </table>
  </div>
  )
}

export default Todos
