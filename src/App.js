import logo from "./logo.svg";
import "./App.css";
import Layout from "./account/Layout";
import { Link, Route, Routes } from "react-router-dom";
import Login from "./account/Login";
import About from "./About";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Simple Implementing Features Test Site on React</p>
          <Link to={"/about"}>About</Link>
          <Link to={"/login"}>Sign in</Link>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      <Routes>
        <Route path="/" />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
      </Routes>
      {/* <Layout /> */}
    </>
  );
}

export default App;
