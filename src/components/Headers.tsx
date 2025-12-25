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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 64; // --header-height value
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className={`app-header ${scrolled ? "scrolled" : ""}`}>
      <div className="brand">
        <img src={logo} className="header-logo" alt="Logo" />
      </div>
      <nav className="main-nav" aria-label="Main navigation">
        <a
          href="#development"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("development");
          }}
          className="nav-link"
        >
          Development & Integration
        </a>
        <a
          href="#design"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("design");
          }}
          className="nav-link"
        >
          UI & UX Design
        </a>
        <a
          href="#connect"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("connect");
          }}
          className="nav-link"
        >
          Connect
        </a>
      </nav>
    </header>
  );
}

export default Headers;
