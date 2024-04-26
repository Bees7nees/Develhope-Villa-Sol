import { useState, useEffect } from 'react';

function List() {
    const [lista, setTasks] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleAddTask = () => {
        if (inputValue.trim() !== '') {
            const newTask = {
                id: Date.now(),
                title: inputValue,
                completed: false,
            };
            setTasks([...lista, newTask]);
            setInputValue('');
        }
    };

    const handleToggleComplete = (index) => {
        const tareascompletadas = [...lista]

        tareascompletadas[index].completed = !tareascompletadas[index].completed;

        setTasks(tareascompletadas
        );

    };

    const handleDeleteTasks = () => {
        const remainingTasks = lista.filter((task) => !task.completed);
        return setTasks(remainingTasks);
    };

    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem('tasks'));

        setTasks(storedTasks);

    }, []);

    useEffect(() => {
        if (lista.length > 0) localStorage.setItem('tasks', JSON.stringify(lista));
    }, [lista]);

    return (
        <div>
            <h1>ToDoList</h1>
            <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder="Agregar tarea"
            />
            <button onClick={handleAddTask} disabled={inputValue.trim() == ''} >Agregar</button>
            <ul>
                {lista.map((task, index) => {

                    return (

                        <li key={task.id}>
                            <input
                                type="checkbox"
                                checked={task.completed}
                                onChange={() => handleToggleComplete(index)}

                            />
                            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                                {task.title}
                            </span>
                        </li>
                    )
                }
                )}
            </ul>
            <button onClick={handleDeleteTasks} >Eliminar Tareas Completadas</button>

        </div>
    );
}

export default List;