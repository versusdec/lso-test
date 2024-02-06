import styles from "./styles.module.scss"

export const Breadcrumbs = ()=>{
  
  return <div className={styles.breadcrumbs}>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Lorem Ipsum is</a></li>
      <li><a>Lorem Ipsum is simply dummy</a></li>
    </ul>
  </div>
}