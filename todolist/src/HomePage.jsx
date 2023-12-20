import React, { useEffect, useState } from 'react'
import Add from './Add'
import axios from 'axios'
function HomePage() {
    const [todos, setTodos] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:3001/get')
        .then(result => setTodos(result.data))
        .catch(err => console.log(err))
    },[] )
    const handleEdit =()=> {
        axios.get('http://localhost:3001/update/'+id)
        .then(result => setTodos(result))
        .catch(err => console.log(err))
    }


  return (
    <div className='home'>
        <h2>Todo List</h2>
        <Add />
        {
            todos.length === 0 ?
            <div><h2>No Record</h2></div>
            :
            todos.map(todo =>(
                // eslint-disable-next-line react/jsx-key
                <div className='task'>
                    <div className='checkbox' onClick={() => handleEdit(todo._id)}>
                        <BsCircleFill className='icon'/>
                        <p>{todo.task}</p>
                    </div>
                    <div>
                        <span><BsFillTrashFill classname='icon'/></span>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default HomePage