import { useEffect,useState } from 'react'
import styles from "./ScrollUp.module.css"

export default function ScrollUp() {
    const [scrollup,setscrollup]= useState(false);
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY > 100){
                setscrollup(true)
            }else setscrollup(false)
        })
    },[])

    const desplazar=()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }

  return (
    <div>
        {scrollup && (
            <button style={{
                position:"fixed",
                bottom:"50px",
                right:"50px",
                height:"50px",
                width:"50px",
                fontSize:"50px",
                color:"#fff",
                cursor:"pointer",
                border:"none",
                borderRadius:"10px",
            
            }}  className={styles.btnScroll} onClick={desplazar}>^</button>
        )}

    </div>
  )
}
