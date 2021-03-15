import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

function Header() {
    return (
        <header>
        <h1>I<span class="seo">lya</span> Libershteyn</h1>
        <nav>
            <ul>
                <li>
                    <Link
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        <a href="#about">About Me</a>
                    </Link>
                </li>
                <li>
                    <Link
                        activeClass="active"
                        to="Work"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        <a href="#Work">Work</a>
                    </Link>
                </li>
                <li>
                    <Link
                        activeClass="active"
                        to="Contact"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        <a href="#Contact">Contact</a>
                    </Link>
                </li>
            </ul>
        </nav>
      </header>
    );
};

export default Header;