import Color from "./Color";


export default function Colores({colores}) {
  return (
    <ul>
 {colores.map((c)=><Color color={c}/>
 )}
    </ul>
 
  )
}
