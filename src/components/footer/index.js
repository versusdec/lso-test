import { Social } from "@/components/social"
import { Copyright } from "@/components/copyright"
import { Logo } from "@/components/logo";
import styles from './styles.module.scss';

export const Footer = () => {
  
  return <footer id="footer" className={styles.footer}>
    <div className={'inner ' + styles.inner}>
      <div className={styles.info}>
        <Logo className={styles.logo}/>
        <p>Lorem Ipsum is simply dummy</p>
        <p>
          when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five
        </p>
        <Social className={styles.social}/>
      </div>
      <div className={styles.nav}>
        <div className={'wrap ' + styles.wrap}>
          <nav>
            <h3>Categhory</h3>
            <ul>
              <li><a href="#">item 1</a></li>
              <li><a href="#">item 2</a></li>
              <li><a href="#">item 3</a></li>
              <li><a href="#">item 4</a></li>
              <li><a href="#">item 5</a></li>
              <li><a href="#">item 6</a></li>
            </ul>
          </nav>
          <nav>
            <h3>Play better</h3>
            <ul>
              <li><a href="#">item 1</a></li>
              <li><a href="#">item 2</a></li>
              <li><a href="#">item 3</a></li>
              <li><a href="#">item 4</a></li>
              <li><a href="#">item 5</a></li>
              <li><a href="#">item 6</a></li>
            </ul>
          </nav>
          <nav>
            <h3>Useful links</h3>
            <ul>
              <li><a href="#">link</a></li>
              <li><a href="#">link</a></li>
              <li><a href="#">link</a></li>
              <li><a href="#">link</a></li>
              <li><a href="#">link</a></li>
              <li><a href="#">link</a></li>
            </ul>
          </nav>
        </div>
        <Copyright className={styles.copyright}/>
      </div>
    </div>
  </footer>
}