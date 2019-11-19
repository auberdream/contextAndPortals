import React from "react";
import { Link } from "react-router-dom";
import { Nav, NavLink } from "./styles.js";

export default () => (
  <Nav>
    <div>
      <NavLink>
        <Link to={"/"}>Home</Link>
      </NavLink>
      <NavLink>
        <Link to={"/about"}>About</Link>
      </NavLink>
      <NavLink>
        <Link to={"/maps"}>Maps</Link>
      </NavLink>
      <NavLink>
        <Link to={"/admin"}>Administration</Link>
      </NavLink>
    </div>
    <div>
      <NavLink>
        <Link to={"/logout"}>Logout</Link>
      </NavLink>
    </div>
  </Nav>
);
