import "./App.css"

const App = () => {
  return (
    <div>
      <Header />
      <Body />
      <Technologies />
    </div>
  );
}
const Technologies = () => {
  return (<div>
    <ul>
      <li>css</li>
      <li>html</li>
      <li>react</li>
    </ul>
  </div>)
}
const Header = () => {
    return(<div>
      <a href="#">Home</a>
      <a href="#">News Feed</a>
      <a href="#">Messages</a>
    </div>)
}
const Body = () => {
  return (<div>
    <h1>Hello React !</h1>
  </div>)
}
export default App