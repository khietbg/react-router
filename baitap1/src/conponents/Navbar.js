import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const styleNavLink = ({ isActive }) => ({
    background: isActive ? "blue" : "white",
    color: isActive ? "white" : "black",
  });
  return (
    <div>
      <ul className="nav justify-content-end my-5">
        <li className="nav-item">
          <NavLink style={styleNavLink} className="nav-link" to={"/"}>
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink style={styleNavLink} className="nav-link" to={"/about"}>
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink style={styleNavLink} className="nav-link" to={"/user"}>
            user
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink style={styleNavLink} className="nav-link" to={"/contact"}>
            contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
