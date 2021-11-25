import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => (
  <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
    <li>
      <NavLink to="/" exact="true" className="nav-link px-2 ">
        Main
      </NavLink>
    </li>
    <li>
      <NavLink to="/contacts" exact="true" className="nav-link px-2 ">
        Contacts
      </NavLink>
    </li>
  </ul>
);

export default Navigation;
