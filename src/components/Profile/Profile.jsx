import React from 'react'
import c from './Profile.module.css'

const Profile = () => {
  return (
    <div className={c.content}>
    <div class={c.img}></div>
    <div>ava + description</div>
    <div>
      My post
      <div>New post</div>
      <div>
        <div>post 1</div>
        <div>post 2</div>
      </div>
    </div>
  </div>
  )
}

export default Profile;