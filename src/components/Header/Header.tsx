import { useState } from "react";
import "./_Header.scss";
import Menu from "../menu/menu";

export default function Header() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen((prevIsMenuOpen) => {
      const menuIsNowOpen = !prevIsMenuOpen;
      setIsHeaderVisible(!menuIsNowOpen);
      return menuIsNowOpen;
    });
  };

  return (
    <header className="header-container">
      <div className="menu-and-city">
        <Menu onMenuToggle={handleMenuToggle} isOpen={isMenuOpen} />
        <div className={`city-div ${!isHeaderVisible ? "invisible" : ""}`}>
          <img className="city-logo" src="/logo.png" alt="Borås logotyp" />
          <p>Bara i Borås</p>
        </div>
      </div>

      <div
        className={`${!isHeaderVisible ? "invisible" : ""
          } search-icon-container`}
      >
        <img
          className="search-icon"
          src="https://img.icons8.com/ios7/600/search.png"
          alt="Sök ikon"
        />
      </div>
    </header>
  );
}
