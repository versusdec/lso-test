import styles from './styles.module.scss'
import { useThemeContext } from "../../contexts/theme-context";


export const ThemeSwitch = () => {
  const {theme, setTheme} = useThemeContext()

  return <div className={styles.switch}>
    <label className={`${styles.label} ${styles[theme]}`}>
      <input type="checkbox" checked={theme === 'dark'} onChange={(e)=>{
        setTheme(e.target.checked ? 'dark' : 'light')
      }} />
      <span/>
    </label>
  </div>
}