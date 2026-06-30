import { useState } from "react";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            <h2>Portfolio</h2>

            <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                 ☰
            </div>

            <ul className={menuOpen ? "nav-links active" : "nav-links"}>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

        </nav>
    );
}

export default Navbar;