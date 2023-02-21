import React from "react";
import { NavLink } from "react-router-dom";

function Header(props) {
  return (
    <header className="bg-slate-700 py-5">
      <div className="container mx-auto flex justify-between items-center">
        <NavLink className="text-white text-4xl" to="/">
          CyberMovie
        </NavLink>

        <nav className="flex gap-6">
          <NavLink
            className={(params) => {
              const classes = "text-xl";
              if (params.isActive) return `text-yellow-400 ${classes}`;
              return `text-white ${classes}`;
            }}
            to="/signIn"
          >
            Sign In
          </NavLink>
          <NavLink
            className={(params) => {
              const classes = "text-xl";
              if (params.isActive) return `text-yellow-400 ${classes}`;
              return `text-white ${classes}`;
            }}
            to="/signUp"
          >
            Sign Up
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
