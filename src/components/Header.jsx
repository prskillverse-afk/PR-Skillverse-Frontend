import { useState } from "react";
import "../styles/Header.css";
import "animate.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header animate__animated animate__fadeInDown">
      <nav className="nav-container">
        <div className="nav-content">

          {/* LOGO */}
          <div className="logo-container">
            <div className="logo-main">
              <img
                src="https://res.cloudinary.com/dvknx0hpm/image/upload/v1747661891/ChatGPT_Image_May_19__2025__05_23_01_PM-removebg-preview_fzzoei.png"
                alt="PR Skillverse Logo"
              />
              <div className="logo-text-container">
                <span className="logo-text">PR Skillverse</span>
                <span className="logo-tagline">
                  Build Your SAP Career with Us
                </span>
              </div>
            </div>
          </div>

          {/* HAMBURGER */}
          <button
            className={`hamburger ${menuOpen ? "active" : ""}`}
            aria-label="Menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* NAV MENU */}
          <div className={`nav-menu ${menuOpen ? "active" : ""}`}>
            <a className="nav-link" href="#home" onClick={() => setMenuOpen(false)}>Home</a>
            <a className="nav-link" href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a className="nav-link" href="#courses" onClick={() => setMenuOpen(false)}>Courses</a>
            <a className="nav-link" href="#Reviews" onClick={() => setMenuOpen(false)}>Reviews</a>
            <a className="nav-link" href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </div>

        </div>
      </nav>
    </header>
  );
}

export default Header;
