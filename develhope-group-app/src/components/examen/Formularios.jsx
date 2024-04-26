
import { useState, useEffect } from 'react'

export default function Formularios() {
    const [email, setemail] = useState('');
    const [nombre, setnombre] = useState('');
    const [apellido, setapellido] = useState('');
    const [enviado, setenviado] = useState(false);
    const [persona, setpersona] = useState(
        {
            nombre: '',
            apellido: '',
            email: '',
        }
    )

    const handlesubmit = (e) => {
        e.preventDefault()
        const personanueva = {
            nombre: nombre,
            apellido: apellido,
            email: email,
        }
        setpersona(personanueva);
        if(personanueva.nombre && personanueva.apellido && personanueva.email){
        setenviado(true);
    }
        setnombre('');
        setapellido('');
        setemail('');


    }
    const handleinput = (e) => {
        if (e.target.name == 'nombre') setnombre(e.target.value)
        if (e.target.name == 'apellido') setapellido(e.target.value)
        if (e.target.name == 'email') setemail(e.target.value)


    }
    const handlReset = () => {
setpersona( {
    nombre: '',
    apellido: '',
    email: '',
}
)
setenviado(false)
    }
    return (
        <form onSubmit={handlesubmit}>
            <input type="text" value={nombre} name='nombre' onChange={handleinput} />
            <input type="text" value={apellido} name='apellido' onChange={handleinput} />
            <input type="email" value={email} name='email' onChange={handleinput} />

            {enviado && Object.keys(persona).map((key) => (
                <p>{key}: {persona[key]}</p>
            ))}
            <button type='submit'>Enviar</button>
            <button onClick={handlReset}>Reset</button>

        </form>
    )
}
