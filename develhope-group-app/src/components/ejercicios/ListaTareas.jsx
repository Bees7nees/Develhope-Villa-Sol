// Cree un TodoListcomponente que represente una ul etiqueta con una li etiqueta para cada elemento contenido en la todos variable de estado .
// La todosvariable de estado debe ser una matriz de cadenas.
// El TodoListcomponente también debe contener una inputetiqueta y un archivo button.
// Cuando se buttonhace clic en, el controlador de eventos debe agregar el valor de la inputetiqueta a la todosmatriz.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Create a TodoList component that renders a ul tag with a li tag for each item contained in the todos state variable.
// The todos state variable should be an array of strings.
// The TodoList component should also contain an input tag and a button.
// When the button is clicked, the event handler should add the value of the input tag to the todos array.

import { useState } from "react"


export default function ListaTareas() {
    const [todo,setTodo]=useState([]);
    const [inputText,setinput]=useState('');
    
  return (
    <>
    <button onClick={()=>{
        if(!inputText.trim())alert('ingrese una tarea')
        else{
    setTodo([...todo,inputText])
    setinput('')
}
    }}>Añadir Tarea</button>
    <input type="text"  value={inputText} onChange={(e)=>setinput(e.target.value)} />
    <ul>
        {todo.map((e)=><li>{e}</li>)}
    </ul>
    </>
  )
}

