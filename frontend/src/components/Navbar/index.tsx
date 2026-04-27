import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">CodeSend</div>

      <ul className={`nav-links ${open ? "active" : ""}`}>
        <li><a href="/">Início</a></li>
        <li><a href="/bulk-send">Envio em Massa</a></li>
        
      </ul>

      <div className="menu-toggle" onClick={() => setOpen(!open)}>
        ☰
      </div>
    </nav>
  );
}