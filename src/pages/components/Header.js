import React from "react";
import "./Header.css";
import Logo from "./icons/Logo";

const Header = () => {
  return (
    <header>
      <Logo className="Header__Logo" />
      <nav>
        <ul className="Header__Menu">
          <li>
            <a href="#HowWork">Como funciona</a>
          </li>
          <li>
            <a href="#OurServices">Serviços</a>
          </li>
          <li>
            <a href="#Clients">Clientes</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
