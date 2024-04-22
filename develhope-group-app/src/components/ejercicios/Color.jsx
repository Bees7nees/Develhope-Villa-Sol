// Cree un componente llamado Color que reciba un objeto llamado 'color' como accesorio, que tendrá 2 propiedades, 'id' y 'nombre', y devuelve una etiqueta 'li' que muestra la propiedad 'nombre'. Cree un segundo componente llamado Colores, que toma una matriz de objetos como accesorio, donde las propiedades siempre son 'nombre' e 'id', y muestra una lista desordenada de componentes de Color.



export default function Color({color}) {
    

  return (
    
    <li>{color.name}</li>
    
  )
}
