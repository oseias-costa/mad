import React from "react";
import './Header.css'
import { Logo } from "./utils/icons";

const Header = () => {
    return(
        <header>
            <Logo />
            <nav>
                <ul className="Header__Menu">
                    <li><a href='#'>Início</a></li>
                    <li><a href="#HowWork">Como funciona</a></li>
                    <li><a href="#">Quem Somos</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header