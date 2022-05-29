import React from "react";
import styled from "styled-components";
import Login from "./Login";

const Navbar = () => {
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
    </>
  );
};

export default Navbar;

const Nav = styled.nav`
  width: 100%;
  background-color: #fccc8d;
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
