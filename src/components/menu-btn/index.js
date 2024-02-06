import styles from "./styles.module.scss"

export const MenuBtn = ({onClick, isActive, ...rest})=>{
  
  return <div className={`${isActive ? styles.active : ''} ` + styles['menu-btn']} onClick={()=>{onClick()}}>
    <i>
      <span/>
    </i>
  </div>
}