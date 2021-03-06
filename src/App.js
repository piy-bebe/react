import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

// CSS
import './App.css'

// Pages
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import Dialogs from './components/Dialogs/Dialogs'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'

// Main
const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path="/dialogs" render={ () => <Dialogs messagesPage={props.state.messagesPage}/> } />
          <Route path="/profile" render={ () => <Profile profilePage={props.state.profilePage} dispatch={props.dispatch}/> } />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  )
}
export default App
