import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
 const url = 'https://jsonplaceholder.typicode.com/todos/'
 const [todos , setTodos] = useState()
 const fetchApi = async () =>{
        const res = await fetch(url)
        const resJSON = await res.json()
        setTodos(resJSON)
 }

useEffect(()=>{
  fetchApi()
}, [])


 return (
  <div className="App">
     CONSUMO DE UNA API
     <ul>
        {
          !todos ? 'sse esta cargando la informacion':
          todos.map((todo,index)=>{
              return <li>{todo.title} {todo.completed ? 'good':'bad'}</li>
          })
        }
     </ul>
  </div>
 );
}

export default App;
