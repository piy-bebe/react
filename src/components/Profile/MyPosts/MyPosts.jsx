import React from 'react'
import Post from './Post/Post'

const MyPosts = (props) => {

  const postsElements = props.posts.map(p => <Post title={p.title} message={p.message} />)

  return (
    <div>
      My post
      <div>New post</div>
      <div>
        { postsElements }
      </div>
    </div>
  )
}

export default MyPosts
