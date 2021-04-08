import React from 'react'
import { NavLink } from 'react-router-dom'
import CSS from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={CSS.nav}>
      <div className={CSS.item}>
        <NavLink
          className={CSS.link}
          activeClassName={CSS.active}
          to="/profile"
        >
          Profile
        </NavLink>
      </div>
      <div className={CSS.item}>
        <NavLink
          className={CSS.link}
          activeClassName={CSS.active}
          to="/dialogs"
        >
          Dialogs
        </NavLink>
      </div>
      <div className={CSS.item}>
        <NavLink className={CSS.link} activeClassName={CSS.active} to="/news">
          News
        </NavLink>
      </div>
      <div className={CSS.item}>
        <NavLink className={CSS.link} activeClassName={CSS.active} to="/music">
          Music
        </NavLink>
      </div>
      <div className={CSS.item}>
        <NavLink
          className={CSS.link}
          activeClassName={CSS.active}
          to="/settings"
        >
          Settings
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar
