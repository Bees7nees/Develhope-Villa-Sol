import React from 'react'
import { useState, useEffect } from 'react'

export default function Lista_prueba() {
  const [inputstate, setInput] = useState('');
  const [lista, setlista] = useState([]);

  const handlelista = () => {
    setlista([...lista, inputstate])
setInput('')
  }
  
  const handleInput = (event) => {
setInput(event.target.value)
  }
  

  return (

    <div>
      <input type="text" value={inputstate} onChange={handleInput} />
      <button onClick={()=>handlelista()} > agregar</button>
      <ul>
        {lista.map((e) => {
          return <li>{e}</li>
        })}
      </ul>
    </div>
  )
}



