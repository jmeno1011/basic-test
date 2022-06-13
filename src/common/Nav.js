import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/tono_logo.png";

const Nav = () => {
  return (
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
  );
};

export default Nav;

const NavBar = styled.nav`
  width: 100%;
  border-bottom: 1px solid burlywood;
  background-color: orange;
  ul {
    display: flex;
  }
  ul li {
    padding: calc((8vh - 21px) / 2) 16px;
  }
  li {
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
