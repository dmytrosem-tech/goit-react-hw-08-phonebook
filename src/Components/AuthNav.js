import React from "react";
import { NavLink } from "react-router-dom";

export default function AuthNav() {
  return (
    <div className="text-end">
      <NavLink
        to="/login"
        exact="true"
        className="btn btn-outline-light me-2"
        style={{ fontSize: 10 }}
        activestyle="nav__linkActv"
      >
        Sign in
      </NavLink>
      <NavLink
        to="/register"
        exact="true"
        className="btn btn-primary"
        style={{ fontSize: 10 }}
        activestyle="nav__linkActv"
      >
        Sign up
      </NavLink>
    </div>
  );
}
