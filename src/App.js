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
