import React from 'react'
import c from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
  const postsData = [
    { id: 0, title: 'Me', message: "Hello guys, i'm Alex!" },
    { id: 1, title: 'Me', message: 'Hi Alex, how are you?' },
    { id: 2, title: 'Me', message: 'Yo, Guys!' },
  ]
  return (
    <div>
      My post
      <div>New post</div>
      <div>
        <Post title={postsData[0].title} message={postsData[0].message} />
        <Post title={postsData[1].title} message={postsData[1].message} />
        <Post title={postsData[2].title} message={postsData[2].message} />
      </div>
    </div>
  )
}

export default MyPosts
