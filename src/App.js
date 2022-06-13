import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import Nav from "./common/Nav";

function App() {
  return (
    <>
      <div className="App">
        <Nav />
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
