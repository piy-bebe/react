import './App.css'
const App = () => {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img
          src="https://cnet4.cbsistatic.com/img/Epbghr38kQNMsXPznUPXjedVpF4=/570x0/2018/07/30/f2932efe-cfd6-44ef-9fb6-65cde5010aab/mozilla-master-brand-firefox-fox-head.jpg"
          alt="logo"
        />
      </header>
      <nav className="nav">
        <div>Profile</div>
        <div>Messages</div>
      </nav>
      <div className="content">Main content</div>
    </div>
  )
}
export default App
