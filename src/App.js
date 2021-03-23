import React from 'react'
import './App.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />

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
