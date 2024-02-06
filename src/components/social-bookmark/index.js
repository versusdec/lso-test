import styles from "./styles.module.scss"
import { Facebook, Heart, Pinterest, Reddit, Telegram, Twitter } from "../../icons";

export const SocialBookmark = ()=>{
  
  return <div className={styles.book}>
    <a href="#"><Facebook/></a>
    <a href="#"><Twitter/></a>
    <a href="#"><Telegram/></a>
    <a href="#"><Pinterest/></a>
    <a href="#"><Reddit/></a>
    <a href="#"><Heart/></a>
  </div>
}