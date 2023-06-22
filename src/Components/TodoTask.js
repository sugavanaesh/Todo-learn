import React, { useState } from 'react'
// import { Button } from 'bootstrap';


var todoid = 0;
const TodoTask = () => {

  const [value, setValue] = useState("")
  const [todos, setTodos] = useState([])


  const handleSubmit = e => {
    e.preventDefault()
    console.log(value)
    setTodos(prevTodo => {
      setValue("");
      return [...prevTodo, { todo: value, id: todoid++, completed: false}]
    })
  }
  // function deleteTodo(Id) {
  //   setTodos(prevTodo => {
  //     return prevTodo.filter(item => item.id !== Id)
  //   })
  // }

  function toggleComplete(Id) {
    console.log("working")
    setTodos(todos.map((todo) => 
      todo.id === Id ? {...todo, completed: !todo.completed } : todo
    ))
  }

  return (
    <div className='card'>
      <div className='card-body p-5' >
        <h1 className='text-center'>TASKS!!</h1>
        <form onSubmit={handleSubmit} className='d-flex flex-column justify-content-center align-items-center mb-4'>
          <div className='row justify-content-center'>
            <input className='form-control col-lg-8 col-md-6' type="text" value={value} placeholder='Enter the tasks' onChange={(e) => setValue(e.target.value)}></input>
            <button type="submit" className='btn btn-dark col-lg-4 col-md-6'>ADD TASK</button>
            {/* <br/> <Button  /> */}
          </div>
        </form>
        {todos.map((item, Index) => {
          return (
            <div className='d-flex flex-row' key={Index}>
              <input className='form-check-input border-3' type='checkbox' value='' onClick={()=>toggleComplete(item.Id)}></input>
              <li className='list-group-item d-flex align-items-center border-0 mx-1 mb-2'>{item.todo}</li>
              {/* <button className='btn btn-danger' onClick={() => deleteTodo(item.id)}>Delete</button> */}
              {item.completed === true ? <span className='text-muted text-decoration-line-through'>{item.todo}</span> : <span>H</span>}
            </div>)
        })}
      </div>
    </div>
  )
}

export default TodoTask
