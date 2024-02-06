import Link from "next/link";
import {Social} from "@/components/social"
import {Phone, Funnel, Android, Apple} from "../../icons"
import styles from './styles.module.scss'
import { ThemeSwitch } from "../theme-switch";

export const MenuItem = ({icon, label, link}) => {
  
  return <Link href={link} className="menu-item">
    <div className="icon">{icon}</div>
    <span>{label}</span>
  </Link>
}

export const Header = () => {
  
  return <header id={'header'} className={styles.header}>
    <div className={'inner ' + styles.inner}>
      <div className={'left ' + styles.left}>
        <MenuItem icon={<Phone/>} label={'menu item 1'} link={'#'}/>
        <MenuItem icon={<Funnel/>} label={'menu item 2'} link={'#'}/>
        <MenuItem icon={<Android/>} label={'menu item 3'} link={'#'}/>
        <MenuItem icon={<Apple/>} label={'menu item 4'} link={'#'}/>
      </div>
      <div className={'right ' + styles.right}>
        <Social/>
        <ThemeSwitch/>
      </div>
    </div>
  </header>
}