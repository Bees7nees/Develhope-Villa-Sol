import { useState } from 'react'
import './App.css'
import Imagen from "./Imagen"
import TitleDescription from './TitleDescription'
import Button from './Buttons'

function App() {

  return (
    <>
    <Imagen fotomain="/src/assets/fotomain.png" fotoplato="/src/assets/fotoplato.png"/>
    
    <TitleDescription
      title={"Hospédese en uno de los mejores hoteles en Cádiz"} 
      description={"Hay una frase que siempre llevo conmigo, y es que jamás somos los mismos de hola, knvksn No importa el lapso de tiempo que decidas sumergirte en ese destino, bienvenidos a este hot no importa si la aventura es en solitario, o si escoges compartir los descubrimientos con alguien. El singular hito valedero es la experiencia, y la cultura que se agolpa con ímpetu en l destinada a revelar el periplo con el que hemos estado soñando toda la vida en cada rincon de"}
    />

    <Button />
    </>
  )
}

export default App