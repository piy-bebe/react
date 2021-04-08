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
  const dialogsData = [
    { id: 0, name: 'Alexey' },
    { id: 1, name: 'Dimich' },
    { id: 2, name: 'Roma' },
  ]

  const messagesData = [
    { id: 0, message: 'Hello Dima! :)' },
    { id: 1, message: 'Hello Roma! :D' },
  ]
  return (
    <div className={CSS.dialogs}>
      <div className={CSS.leftSide}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
        <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
      </div>
      <div className={CSS.rightSide}>
        <Message message={messagesData[0].message} />
        <Message message={messagesData[1].message} />
      </div>
    </div>
  )
}

export default Dialogs
