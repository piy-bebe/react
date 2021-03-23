import React from 'react'
import './App.css'
import Header from './components/Header'
const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <nav className="nav">
        <div>
          <a>Profile</a>
        </div>
        <div>
          <a>Message</a>
        </div>
        <div>
          <a>News</a>
        </div>
        <div>
          <a>Music</a>
        </div>
        <div>
          <a>Settings</a>
        </div>
      </nav>
      <div className="content">
        <div class="img"></div>
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
    </div>
  )
}
export default App
