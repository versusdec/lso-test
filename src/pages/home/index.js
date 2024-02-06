import Link from "next/link";
import { Head } from "@/components/head"
import { Header } from "@/components/header";
import { Logo } from "@/components/logo";
import { Lens } from "@/icons/lens";
import { Footer } from "@/components/footer";
import { Android, Apple, Download } from "@/icons";
import { Rating } from "../../components/rating";
import { useCallback, useEffect, useState } from "react";
import { UserRate } from "../../components/user-rate";
import { Breadcrumbs } from "../../components/breadcrumbs";
import { SocialBookmark } from "../../components/social-bookmark";
import { MenuBtn } from "../../components/menu-btn";
import { Funnel, Phone } from "../../icons";
import { MenuItem } from "../../components/header";

export default function Home() {
  const totalVotes = [4, 5, 6, 4, 8, 7, 9, 4, 5, 9, 9, 7]
  
  const findAverage = useCallback((arr, length) => {
    return (arr.reduce((sum, vote) => sum + vote, 0) / length).toFixed(1);
  }, [])
  
  const averageRating = findAverage(totalVotes, totalVotes.length)
  const [userRate, setUserRate] = useState(7)
  const [votes] = useState(totalVotes.length)
  const [rating, setRating] = useState(averageRating)
  const [menuActive, setMenuActive] = useState(false)
  const [headerMenuActive, setHeaderMenuActive] = useState(false)
  
  const handleUserRate = useCallback((val) => {
    const newArr = [...totalVotes]
    newArr.splice(-1)
    setRating(findAverage([...newArr, val], newArr.length + 1))
    setUserRate(val)
  }, [])
  
  const handleMenu = useCallback(()=>{
    setMenuActive(!menuActive)
  }, [menuActive])
  
  const handleHeaderMenu = useCallback(()=>{
    setHeaderMenuActive(!headerMenuActive)
  }, [headerMenuActive])
  
  return (
    <>
      <Head title={'Welcome'}/>
      <Header/>
      <nav id={'nav'} className={menuActive ? 'active' : ''}>
        <div className="inner">
          <Logo className={'header-logo'}/>
          <div className="mobile-wrap">
            <div className="header-items">
              <MenuItem icon={<Phone/>} label={'menu item 1'} link={'#'}/>
              <MenuItem icon={<Funnel/>} label={'menu item 2'} link={'#'}/>
              <MenuItem icon={<Android/>} label={'menu item 3'} link={'#'}/>
              <MenuItem icon={<Apple/>} label={'menu item 4'} link={'#'}/>
            </div>
            <div className="left">
              <ul>
                <li><a href="#">Item</a></li>
                <li><a href="#">Item</a></li>
                <li><a href="#">Item</a></li>
                <li><a href="#">Item</a></li>
                <li><a href="#">Item</a></li>
                <li><a href="#">Item</a></li>
                <li><a href="#">Item</a></li>
                <li><a href="#">Item</a></li>
              </ul>
            </div>
            <div className="right">
              <form>
                <input type="text" placeholder={`Search for...`}/>
                <button type={'submit'}>
                  <Lens/>
                </button>
              </form>
            </div>
          </div>
          <MenuBtn onClick={handleMenu} isActive={menuActive}/>
        </div>
      </nav>
      <header className={'game-header'}>
        <div className="inner">
          <div className="top">
            <div className="wrap">
              <div className={'img'}>
                <img src="/assets/img/goddess-of-victory-nikke-icon-120x120.jpg.png" alt="Game title"/>
              </div>
              <div className="mid">
                <h3>Lorem Ipsum is simply dummy</h3>
                <div className="btns">
                  <Link href={'#'} className="btn"><Android/> Android</Link>
                  <Link href={'#'} className="btn"><Apple/> iOS</Link>
                  <Link href={'#'} className="btn"><Download/> Download on PC</Link>
                </div>
              </div>
              <div className="right flex">
                <Rating rating={rating}/>
                <div className="info">
                  <h4>Players</h4>
                  <span>{votes} votes</span>
                  <div className="ratings">Your rating: <span>{userRate}</span></div>
                </div>
              </div>
            </div>
          </div>
          <div className="bot ">
            <div className="desktop flex align-center justify-between">
              <nav>
                <ul>
                  <li><a href="#">Lorem Ipsum is simply dummy</a></li>
                  <li><a href="#">item</a></li>
                  <li><a href="#">item</a></li>
                  <li><a href="#">item</a></li>
                  <li><a href="#">item</a></li>
                </ul>
              </nav>
              <UserRate rating={userRate} onChange={(v) => {
                handleUserRate(v)
              }}/>
            </div>
            <div className="mobile">
              <nav className={'mobile-dup ' + (headerMenuActive ? 'active' : '')}>
                <ul>
                  <li><a href="#">Lorem Ipsum is simply dummy</a></li>
                  <li><a href="#">item</a></li>
                  <li><a href="#">item</a></li>
                  <li><a href="#">item</a></li>
                  <li><a href="#">item</a></li>
                </ul>
              </nav>
              <div className={`header-menu ${headerMenuActive ? 'active' : ''}`} onClick={()=>{
                handleHeaderMenu()
              }}>
                <span>More info</span>
                <div className="btn">
                  <i><span/></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="inner">
          <div>
            <section className={'content'}>
              <Breadcrumbs/>
              <h1>Lorem Ipsum is simply dummy</h1>
              <div className="desc">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five
                  centuries,
                  but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem
                  Ipsum.
                </p>
              </div>
            </section>
            <section className={'similar'}>
              <h4>Similar articles</h4>
              <div className="list">
                <a className="item">
                  <div className="img">
                    <img src="/assets/img/similar.jpg" alt="Game name"/>
                  </div>
                  <h3>Lorem Ipsum is simply dummy</h3>
                  <div className="desc">
                    <div className="name">ALCO</div>
                    <time dateTime="26 janvier 2023">26 janvier 2023</time>
                  </div>
                </a>
                <a className="item">
                  <div className="img">
                    <img src="/assets/img/similar.jpg" alt="Game name"/>
                  </div>
                  <h3>Lorem Ipsum is simply dummy</h3>
                  <div className="desc">
                    <div className="name">ALCO</div>
                    <time dateTime="26 janvier 2023">26 janvier 2023</time>
                  </div>
                </a>
                <a className="item">
                  <div className="img">
                    <img src="/assets/img/similar.jpg" alt="Game name"/>
                  </div>
                  <h3>Lorem Ipsum is simply dummy</h3>
                  <div className="desc">
                    <div className="name">ALCO</div>
                    <time dateTime="26 janvier 2023">26 janvier 2023</time>
                  </div>
                </a>
                <a className="item">
                  <div className="img">
                    <img src="/assets/img/similar.jpg" alt="Game name"/>
                  </div>
                  <h3>Lorem Ipsum is simply dummy</h3>
                  <div className="desc">
                    <div className="name">ALCO</div>
                    <time dateTime="26 janvier 2023">26 janvier 2023</time>
                  </div>
                </a>
              
              </div>
            </section>
          </div>
          
          <aside>
            <a href="#">
              <div className="adb">
                <img src="/assets/img/ADS.png" alt=""/>
              </div>
            </a>
          </aside>
        </div>
      </main>
      <Footer/>
      <SocialBookmark/>
    </>
  );
}
