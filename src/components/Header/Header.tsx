import { useState } from "react";
import "./_Header.scss";
import logoHeader from "../../../public/Skarmbild_2025-05-07_160140.png";
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
    <header>
      <div className="menu-and-city">
        <Menu onMenuToggle={handleMenuToggle} isOpen={isMenuOpen} />
        <div className={`city-div ${!isHeaderVisible ? "invisible" : ""}`}>
          <img className="city-logo" src={logoHeader} alt="" />
          <p>Bara i Borås</p>
        </div>
      </div>
      <div
        className={`${
          !isHeaderVisible ? "invisible" : ""
        } search-icon-container`}
      >
        <img
          className="search-icon"
          src="https://img.icons8.com/ios7/600/search.png"
          alt=""
        />
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