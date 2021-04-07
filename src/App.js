import React from 'react'
import {Route, BrowserRouter} from 'react-router-dom'

// CSS
import './App.css'

// Pages 
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import Dialogs from './components/Dialogs/Dialogs'
import News from './components/News/News'

// Main
const App = () => {
  return (
    <BrowserRouter>
     <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Route path="/dialogs" component={Dialogs} />
        <Route path="/profile" component={Profile} />
        <Route path="/news" component={News} />
      </div>
    </div>
    </BrowserRouter>
  )
}
export default App
