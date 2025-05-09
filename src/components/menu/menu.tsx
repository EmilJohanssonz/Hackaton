import { NavLink } from "react-router-dom";
import "./_menu.scss";

type MenuProps = {
  onMenuToggle: () => void;
  isOpen: boolean;
};

export default function Menu({ onMenuToggle, isOpen }: MenuProps) {
  return (
    <>
      <img
        src="https://www.freeiconspng.com/thumbs/menu-icon/menu-icon-24.png"
        alt="Meny Button"
        className="meny"
        onClick={onMenuToggle}
      />

      {isOpen && <div className="overlay" onClick={onMenuToggle}></div>}

      <nav className={`side-menu ${isOpen ? "open" : ""}`}>
        <div className="nav-header">
          <div className="nav-city-div">
            <img className="city-logo" src="logo.png" alt="City logo" />
            <p>Bara i Borås</p>
          </div>
          <div>
            <button className="close-btn" onClick={onMenuToggle}>
              X
            </button>
          </div>
        </div>
        <ul>
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Hem
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/event"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Evenemang
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/restaurants/cafe"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Restauranger
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/shopping"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Shopping
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/education"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Utbildning
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/enterprise"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Företag
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/healthcare"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Vård & Hälsa
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/map"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Karta
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
