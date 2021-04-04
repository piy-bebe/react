import React from 'react'
import c from './Navbar.module.css'
const Navbar = () => {
  return (     
  <nav className={c.nav}>
    <div className={c.item}>
      <a className={c.link}href="/#">Profile</a>
    </div>
    <div className={c.item}>
      <a className={c.link}href="/#">Message</a>
    </div>
    <div className={c.item}>
      <a className={c.link}href="/#">News</a>
    </div>
    <div className={c.item}>
      <a className={c.link}href="/#">Music</a>
    </div>
    <div className={c.item}>
      <a className={c.link}href="/#">Settings</a>
    </div>
  </nav>
  )
}

export default Navbar;