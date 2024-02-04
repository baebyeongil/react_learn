import logo from "./logo.svg";
import "./App.css";

function App() {
  let post = "신림 국밥 맛집";
  return (
    <div className="App">
      <div className="black-nav">
        <h4>This is blog</h4>
      </div>
      <h4>{post}</h4>
    </div>
  );
}

export default App;
