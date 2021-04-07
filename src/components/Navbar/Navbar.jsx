import React from 'react'
import CSS from './Navbar.module.css'

const Navbar = () => {
  return (     
  <nav className={CSS.nav}>
    <div className={CSS.item}>
      <a className={CSS.link} href="/profile">Profile</a>
    </div>
    <div className={CSS.item}>
      <a className={CSS.link} href="/dialogs">Dialogs</a>
    </div>
    <div className={CSS.item}>
      <a className={CSS.link} href="/#">News</a>
    </div>
    <div className={CSS.item}>
      <a className={CSS.link} href="/#">Music</a>
    </div>
    <div className={CSS.item}>
      <a className={CSS.link} href="/#">Settings</a>
    </div>
  </nav>
  )
}

export default Navbar;