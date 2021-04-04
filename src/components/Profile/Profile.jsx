import React from 'react'
import c from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'

const Profile = () => {
  return (
    <div className={c.content}>
    <div class={c.img}></div>
    <div>ava + description</div>
    <MyPosts />
    </div>
  )
}

export default Profile;