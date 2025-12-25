import { useEffect, useState } from "react";
import "./Headers.css";
import logo from "../assets/logo.svg";

function Headers() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 0);
      
      // Determine active section based on scroll position
      const sections = ["development", "design", "connect"];
      const scrollPosition = window.scrollY + 100; // Offset for header
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          if (scrollPosition >= sectionTop) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };
    
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
      setMenuOpen(false); // Close menu after clicking a link
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`app-header ${scrolled ? "scrolled" : ""}`}>
      <button
        className="menu-toggle"
        onClick={toggleMenu}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        <span className={`hamburger ${menuOpen ? "open" : ""}`}>
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>
      <div className="brand">
        <img src={logo} className="header-logo" alt="Logo" />
      </div>
      <nav
        className={`main-nav ${menuOpen ? "nav-open" : ""}`}
        aria-label="Main navigation"
      >
        <a
          href="#development"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("development");
          }}
          className={`nav-link ${activeSection === "development" ? "active" : ""}`}
        >
          Development & Integration
        </a>
        <a
          href="#design"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("design");
          }}
          className={`nav-link ${activeSection === "design" ? "active" : ""}`}
        >
          UI & UX Design
        </a>
        <a
          href="#connect"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("connect");
          }}
          className={`nav-link ${activeSection === "connect" ? "active" : ""}`}
        >
          Connect
        </a>
      </nav>
    </header>
  );
}

export default Headers;
