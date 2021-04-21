import React from 'react'
import Post from './Post/Post'

const MyPosts = (props) => {

  const postsElements = props.state.posts.map(p => <Post title={p.title} message={p.message} />)

  const messageElement = React.createRef()

  const addPost = () => {
    props.addPost()
  }

  const changeText = () => {
    const text = messageElement.current.value
    props.updateText(text)
  }

  return (
    <div>
      My post
      <div>New post</div>
      <div>
        <textarea onChange={changeText} ref={messageElement} value={props.state.newMessage}></textarea>
      </div>
      <button onClick={addPost}>add</button>
      <div>
        { postsElements }
      </div>
    </div>
  )
}

export default MyPosts
