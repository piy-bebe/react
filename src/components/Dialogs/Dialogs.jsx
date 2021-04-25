import React from 'react'
import CSS from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'  

const Dialogs = (props) => {

  const dialogsElements = props.messagesPage.dialogs.map( d => <DialogItem name={d.name} id={d.id} />)
  const messagesElements = props.messagesPage.messages.map( m => <Message message={m.message} />)
  
  return (
    <div className={CSS.dialogs}>
      <div className={CSS.leftSide}>
        { dialogsElements }
      </div>
      <div className={CSS.rightSide}>
        { messagesElements }
      </div>
    </div>
  )
}

export default Dialogs
