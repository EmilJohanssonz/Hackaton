import "./_Header.scss";
import logoHeader from "../../assets/Skarmbild_2025-05-07_160140.png";
import Menu from "../menu/menu";
export default function Header() {
  return (
    <header>
      <div>
        <Menu />
      </div>
      <div className="city-div">
        <img className="city-logo" src={logoHeader} alt="" />
        <p>Bara i Borås</p>
      </div>
      <div>
        <img
          className="search-icon"
          src="https://img.icons8.com/ios7/600/search.png"
          alt=""
        />
      </div>
    </header>
  );
}
