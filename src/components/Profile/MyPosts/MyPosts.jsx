import React from 'react'
import Post from './Post/Post'
import css from './MyPosts.module.css'

const MyPosts = (props) => {

  const postsElements = props.profilePage.posts.map(p => <Post title={p.title} message={p.message} />)

  const messageElement = React.createRef()

  const addPost = () => {
    props.dispatch({type: 'ADD-POST'})
  }

  const changeText = () => {
    const text = messageElement.current.value
    props.dispatch({type: "UPDATE-TEXT", newText: text})
  }

  return (
    <div>
      <h2 className={css.header}>Создать новый пост</h2>
      <div>
        <textarea onChange={changeText} ref={messageElement} value={props.profilePage.newMessage} className={css.textarea}></textarea>
      </div>
      <button className={css.button} onClick={addPost}>add</button>
      <div>
        { postsElements }
      </div>
    </div>
  )
}

export default MyPosts
