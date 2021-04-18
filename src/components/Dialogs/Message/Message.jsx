import React from 'react-router-dom'
import CSS from './../Dialogs.module.css'

const Message = (props) => {
  return <div className={CSS.message__item}>{props.message}</div>
}

export default Message