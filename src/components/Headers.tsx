import { useEffect, useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import "./Headers.css";

type Props = {
  title?: string;
};

function Headers({ title = "Vite + React" }: Props) {
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
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="header-logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="header-logo react" alt="React logo" />
        </a>
        <h1 className="app-title">{title}</h1>
      </div>
      <nav className="main-nav" aria-label="Main navigation">
        <a href="#" onClick={(e) => e.preventDefault()} className="nav-link">
          Home
        </a>
        <a
          href="https://vite.dev"
          target="_blank"
          rel="noreferrer"
          className="nav-link"
        >
          Docs
        </a>
      </nav>
    </header>
  );
}

export default Headers;
