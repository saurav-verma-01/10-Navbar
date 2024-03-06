import React, { useState } from "react";
import logo from "./logo.svg";
import { FaBars } from "react-icons/fa";
import { links } from "./data";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <header className="header">
      <nav>
        <img src={logo} alt="nav logo" className="nav-logo" />

        <button
          onClick={() => setShowLinks((prev) => !prev)}
          className="nav-toggle"
        >
          <FaBars />
        </button>
      </nav>

      {showLinks && (
        <div className="links-container">
          <ul className="links">
            {links.map((link) => (
              <li key={link.id}>
                <a href={link.url}>{link.text}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
