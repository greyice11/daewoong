import React from "react";
import { NavLink } from "react-router-dom";
import DateTime from "../Date Time";

function Navigation() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-black">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <strong>Daewoong Article Crawler</strong>
          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Dashboard
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  Article Searcher
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Article Crawler
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/blog">
                  Settings
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/blog">
                  User
                </NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" to="/blog">
                  Logout
                  
                </NavLink>
                </li>
                <li>
                 ............................................................
                </li>
                <li className="nav-item nav-link">
                <strong><DateTime></DateTime></strong>
                </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
