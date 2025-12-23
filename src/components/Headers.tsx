import { useEffect, useState } from "react";
import "./Headers.css";
import logo from "../assets/logo.svg";

function Headers() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`app-header ${scrolled ? "scrolled" : ""}`}>
      <div className="brand">
        <img src={logo} className="header-logo" alt="Logo" />
      </div>
      <nav className="main-nav" aria-label="Main navigation">
        <a href="#" onClick={(e) => e.preventDefault()} className="nav-link">
          Development & Integration
        </a>
        <a href="#" onClick={(e) => e.preventDefault()} className="nav-link">
          UI & UX Design
        </a>
        <a href="#" onClick={(e) => e.preventDefault()} className="nav-link">
          Connect
        </a>
      </nav>
    </header>
  );
}

export default Headers;
