import { Link } from "react-router-dom";
import "./_menu.scss";
import { useState } from "react";

export default function Menu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <img
        src="https://www.freeiconspng.com/thumbs/menu-icon/menu-icon-24.png"
        alt="Meny Button"
        className="meny"
        onClick={() => setOpen(!open)}
      />

      {open && <div className="overlay" onClick={() => setOpen(false)}></div>}

      <nav className={`side-menu ${open ? "open" : ""}`}>
        <ul>
          <li>
            <Link to="/home">Hem</Link>
          </li>
          <li>
            <Link to="/event">Evenemang</Link>
          </li>
          <li>
            <Link to="/resturanger/cafe">Restauranger</Link>
          </li>
          <li>
            <Link to="/shopping">Shopping</Link>
          </li>
          <li>
            <Link to="/utbildning">Utbildning</Link>
          </li>
          <li>
            <Link to="/företag">Företag</Link>
          </li>
          <li>
            <Link to="/vård/hälsa">Vård & Hälsa</Link>
          </li>
          <li>
            <Link to="/karta">Karta</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
