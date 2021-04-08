import React from 'react'
import CSS from './Dialogs.module.css'

const Dialogs = (props) => {
  return (
    <div className={CSS.dialogs}>
      <div className={CSS.leftSide}>
        <div className={CSS.dialog__item}>Alexey</div>
        <div className={CSS.dialog__item}>Dmitriy</div>
        <div className={CSS.dialog__item}>Roman</div>
      </div>
      <div className={CSS.rightSide}>
        <div className={CSS.message__item}>Hello</div>
        <div className={CSS.message__item}>Hello my friend</div>
        <div className={CSS.message__item}>How are you</div>
      </div>
    </div>
  )
}

export default Dialogs
