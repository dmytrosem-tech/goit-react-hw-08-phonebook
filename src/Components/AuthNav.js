import React from "react";
import { NavLink } from "react-router-dom";

export default function AuthNav() {
  return (
    <div className="nav">
      <NavLink
        to="/register"
        exact="true"
        style={{ fontSize: 10 }}
        activestyle="nav__linkActv"
      >
        Registration
      </NavLink>
      <NavLink
        to="/login"
        exact="true"
        style={{ fontSize: 10 }}
        activestyle="nav__linkActv"
      >
        Login
      </NavLink>
    </div>
  );
}
