import React from 'react'
import {NavLink} from 'react-router-dom'
import CSS from './../Dialogs.module.css'

const DialogItem = (props) => {
  let path = '/dialogs/' + props.id
  return (
    <div className={CSS.dialog__item}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
}

export default DialogItem