import React, { useRef, useState } from "react";
import logo from "./logo.svg";
import { FaBars } from "react-icons/fa";
import { links, social } from "./data";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const toggleShow = () => {
    // const linksHeight = linksRef.current.getBoundingClientRect();
    // console.log(linksHeight.height);
    setShowLinks((prev) => !prev);
  };

  const linksStyle = {
    height: showLinks
      ? `${linksRef.current.getBoundingClientRect().height}px`
      : "0px",
  };
  return (
    <header className="header">
      <nav>
        <img src={logo} alt="nav logo" className="nav-logo" />

        <button onClick={toggleShow} className="nav-toggle">
          <FaBars />
        </button>
      </nav>

      <div
        style={linksStyle}
        ref={linksContainerRef}
        className="links-container"
      >
        <ul ref={linksRef} className={"links"}>
          {links.map((link) => (
            <li key={link.id}>
              <a href={link.url}>{link.text}</a>
            </li>
          ))}
        </ul>
      </div>

      <ul className="socials">
        {social.map((item) => (
          <li key={item.id}>
            <a href={item.url}>{item.icon}</a>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Navbar;
