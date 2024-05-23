import React, { useContext } from "react";
import { GlobalContext } from './GlobalVariable';
import styles from '../Styles/CounterHost.module.scss';

export default function CounterHost() {
  const { numAdult, setNumAdult, numKids, setNumKids } = useContext(GlobalContext);

  const sumaAdult = () => {
    setNumAdult((prevCounter) => prevCounter + 1);
  };

  const restaAdult = () => {
    if (numAdult > 0) {
      setNumAdult((prevCounter) => prevCounter - 1);
    }
  };

  const sumaChildren = () => {
    setNumKids((prevCounter) => prevCounter + 1);
  };

  const restaChildren = () => {
    if (numKids > 0) {
      setNumKids((prevCounter) => prevCounter - 1);
    }
  };
  let textAdult = numAdult === 1 ? 'adulto' : 'adultos';
  let textKids = numKids === 1 ? 'niño' : 'niños';
  return (
    <div className={styles.counterDiv}>
      <p>{textAdult}: {numAdult}</p>
      <button className={styles.counterButton} onClick={sumaAdult}>+</button>
      <button className={styles.counterButton} onClick={restaAdult}>-</button>

      <p>{textKids}: {numKids}</p>
      <button className={styles.counterButton} onClick={sumaChildren}>+</button>
      <button className={styles.counterButton} onClick={restaChildren}>-</button>
    </div>
  );
}
