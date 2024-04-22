
import styles from './TitulosH6.module.css';

export default function TitulosH6({title,parrafo}) {
  return (
    <div className={styles.section} >
      <div>
    <h6 className={styles.titulo}><strong>{title}</strong></h6>
    <p>{parrafo}</p>
      </div>
    </div>
  )
}
