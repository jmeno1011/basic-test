import logo from "./logo.svg";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import styled from "styled-components";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <NavBar>
            <ul>
              <li>
                <Link to={"/about"}>About</Link>
              </li>
              <li>
                <Link to={"/login"}>Sign in</Link>
              </li>
            </ul>
          </NavBar>
          <img src={logo} className="App-logo" alt="logo" />
          <p>Simple Implementing Features Test Site on React</p>
        </header>
      </div>
    </>
  );
}

export default App;

const NavBar = styled.nav`
  width: 100%;
  border-top: 1px solid burlywood;
  border-bottom: 1px solid burlywood;
  ul {
    display: flex;
  }
  li {
    padding: 8px 16px;
    border-right: 1px solid burlywood;
  }
  li:hover {
    background-color: brown;
  }
  a {
    color: white;
    text-decoration: none;
  }
`;
