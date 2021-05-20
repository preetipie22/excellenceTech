import React, { useState } from 'react';
import './Todo.css';



function Todo(){
     const [todos, setTodos] = useState([]); 
    const [currentTodo, setCurrentTodo] = useState(null);

    const addTodo = () => {
        const updatedTodos = [...todos, currentTodo]; 
        setTodos(updatedTodos);
    }

    return(
        <div>
            <h1>Todo App</h1>
            <input type="text" placeholder="Enter todo item" onChange={(e) => setCurrentTodo(e.target.value)}></input>
            <button type="button" onClick={addTodo}>Add</button>
            <br />
            <table className="tableTodo">
  <thead>
    <tr>
      <th>Todo Item</th>
    </tr>
  </thead>
  <tbody>{todos.map((todo, index) =>
       <tr key={index}>
           <td>{todo}</td>
       </tr>)}
  </tbody>
            </table>
        </div>
    )
    }

export default Todo;