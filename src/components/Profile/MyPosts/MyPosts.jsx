import React from 'react'
import Post from './Post/Post'

const MyPosts = (props) => {

  const postsElements = props.posts.map(p => <Post title={p.title} message={p.message} />)

  const messageElement = React.createRef()

  const addPost = () => {
    const text = messageElement.current.value
    props.addPost(text)
  }

  return (
    <div>
      My post
      <div>New post</div>
      <div>
        <textarea ref={messageElement}></textarea>
      </div>
      <button onClick={addPost}>add</button>
      <div>
        { postsElements }
      </div>
    </div>
  )
}

export default MyPosts
