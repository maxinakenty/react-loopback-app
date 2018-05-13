import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => (
  <aside className="navbar container">
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">
          Meetupz
        </Link>
      </div>
    </nav>
  </aside>
);

export default Navbar;
