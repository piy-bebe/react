import React from 'react'
import c from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {
  return (
    <div className={c.content}>
      <ProfileInfo />
      <MyPosts state={ props.state } addPost={props.addPost} updateText={props.updateText}/>
    </div>
  )
}

export default Profile
