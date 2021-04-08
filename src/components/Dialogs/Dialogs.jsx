import React from 'react'
import CSS from './Dialogs.module.css'
import { NavLink } from 'react-router-dom'

const DialogItem = (props) => {
  let path = '/dialogs/' + props.id
  return (
    <div className={CSS.dialog__item}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
}

const Message = (props) => {
  return <div className={CSS.message__item}>{props.message}</div>
}

const Dialogs = (props) => {
  return (
    <div className={CSS.dialogs}>
      <div className={CSS.leftSide}>
        <DialogItem name="Alexey" id="1" />
        <DialogItem name="Roman" id="2" />
        <DialogItem name="Dmitriy" id="3" />
      </div>
      <div className={CSS.rightSide}>
        <Message message="Hello Dima! :)" />
        <Message message="Hello Roma! :)" />
      </div>
    </div>
  )
}

export default Dialogs
