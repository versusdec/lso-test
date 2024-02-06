import Link from "next/link";
import {Facebook, Twitter, Instagram, Youtube, Google, Rss} from "@/icons"

export const Social = (props) => {
  
  return <div className={'social'} {...props}>
    <Link href={'#'}><Facebook/></Link>
    <Link href={'#'}><Twitter/></Link>
    <Link href={'#'}><Instagram/></Link>
    <Link href={'#'}><Youtube/></Link>
    <Link href={'#'}><Google/></Link>
    <Link href={'#'}><Rss/></Link>
  </div>
}