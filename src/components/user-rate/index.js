import styles from "./styles.module.scss"
import { useEffect, useRef, useState } from "react";

export const UserRate = (props) => {
  const {rating, onChange} = props;
  const [width, setWidth] = useState(46)
  const ref = useRef()
  
  useEffect(() => {
    if (ref.current) {
      function getGlobalDistanceFromLeft(element, target) {
        const global = element.getBoundingClientRect();
        const globalLeft = window.pageXOffset + global.left;
        const targetElement = target ? target.getBoundingClientRect() : 0;
        const targetLeft = window.pageXOffset + targetElement.left;
        
        return target ? targetLeft - globalLeft : '100%';
      }
      
      const parentElement = ref.current;
      const childElement = parentElement.querySelectorAll('.r')[rating]; // Replace with your child element
      const distance = getGlobalDistanceFromLeft(parentElement, childElement);
      
      setWidth(distance)

      parentElement.querySelectorAll('.r').forEach((el, i)=> {
        el.classList.remove(styles._r)
        if(i < rating) el.classList.add(styles._r)
      })
    }
  }, [ref, rating])
  
  return <div className={styles.rate} ref={ref}>
    <div className={styles.bg} style={{width: width}}/>
    <div className={styles.note}>
      Note
    </div>
    <div className={'r ' + styles.r} onClick={()=>{onChange(1)}}>1</div>
    <div className={'r ' + styles.r} onClick={()=>{onChange(2)}}>2</div>
    <div className={'r ' + styles.r} onClick={()=>{onChange(3)}}>3</div>
    <div className={'r ' + styles.r} onClick={()=>{onChange(4)}}>4</div>
    <div className={'r ' + styles.r} onClick={()=>{onChange(5)}}>5</div>
    <div className={'r ' + styles.r} onClick={()=>{onChange(6)}}>6</div>
    <div className={'r ' + styles.r} onClick={()=>{onChange(7)}}>7</div>
    <div className={'r ' + styles.r} onClick={()=>{onChange(8)}}>8</div>
    <div className={'r ' + styles.r} onClick={()=>{onChange(9)}}>9</div>
    <div className={'r ' + styles.r} onClick={()=>{onChange(10)}}>10</div>
  </div>
}