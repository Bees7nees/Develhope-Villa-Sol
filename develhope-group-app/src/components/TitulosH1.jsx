
import styles from './Titulos.module.css';

export default function TitulosH1({title,parrafo}) {
  return (
    <div className={styles.section} >
      <div>
    <h1 className={styles.titulo}><strong>{title}</strong></h1>
    <p>{parrafo}</p>
      </div>
    </div>
  )
}
