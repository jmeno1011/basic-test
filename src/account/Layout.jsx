import React from "react";
import styled from "styled-components";
import Login from "./Login";

const Layout = () => {
  return (
    <>
      <header>
        <Nav>
          <ul>
            <li>Sign In</li>
            <li>Sign Up</li>
            <li>Profile</li>
            <li>Profile Edit</li>
          </ul>
        </Nav>
      </header>
      <Login />
    </>
  );
};

export default Layout;

const Nav = styled.nav`
  width: 100%;
  background-color: #fccc8d;
  ul,
  li {
    list-style: none;
  }
  ul {
    display: flex;
  }
  li {
    padding: 8px;
    margin-right: 16px;
    cursor: pointer;
  }
  li:hover {
    color: white;
    background-color: #ffa42e;
  }
`;
