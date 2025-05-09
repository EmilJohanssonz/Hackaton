import "./_Header.scss";
import Menu from "../menu/menu";

export default function Header() {
  return (
    <header className="header-container">
      <div className="menu-wrapper">
        <Menu />
      </div>

      <div className="city-div">
        <img className="city-logo" src="/logo.png" alt="Borås logotyp" />
        <p>Bara i Borås</p>
      </div>

      <div className="search-wrapper">
        <img className="search-icon" src="/logo.png" alt="Sök ikon" />
      </div>
    </header>
  );
}