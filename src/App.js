import logo from "./assets/tono_logo.png";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import styled from "styled-components";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} />
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
        </header>
        <section style={{ display: "flex" }}>
          <SideNav>
            <ul>
              <li>
                <Link to={"/about"}>About</Link>
              </li>
              <li>
                <Link to={"/login"}>Sign in</Link>
              </li>
            </ul>
          </SideNav>
          <p>Simple Implementing Features Test Site on React</p>
        </section>
      </div>
    </>
  );
}

export default App;

const SideNav = styled.nav`
  width: 8vh;
  min-width: 65px;
  max-width: 100px;
  height: calc(100vh - 8vh);
  background-color: #494e67;
  li {
    padding: 8px;
    cursor: pointer;
  }
  li:hover {
    background-color: white;
    a {
      color: #713bdb;
    }
  }
  a {
    color: white;
    text-decoration: none;
  }
`;

const NavBar = styled.nav`
  width: 100%;
  /* border-top: 1px solid burlywood; */
  border-bottom: 1px solid burlywood;
  background-color: orange;
  ul {
    height: 100%;
    display: flex;
  }
  li {
    padding: 8px 16px;
    border-right: 1px solid burlywood;
    display: flex;
    align-items: center;
  }
  li:hover {
    background-color: brown;
  }
  a {
    color: white;
    text-decoration: none;
  }
`;
