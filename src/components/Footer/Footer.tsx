import { Link } from "react-router-dom";
import "./_Footer.scss";
export default function Footer() {
  return (
    // <footer
    //   style={{
    //     backgroundColor: "#f8f9fa",
    //     padding: "20px",
    //     textAlign: "center",
    //   }}
    // >
    //   <p style={{ margin: 0, fontSize: "0.9rem", color: "#555" }}>
    //     &copy; {new Date().getFullYear()} Din Företagsnamn. Alla rättigheter
    //     förbehållna.
    //   </p>
    //   <p style={{ margin: 0, fontSize: "0.8rem", color: "#777" }}>
    //     Integritetspolicy | Användarvillkor
    //   </p>
    // </footer>

    <footer>
      <h3>Bara i Borås</h3>
      <p>Din Guide till allt i Borås - nyheter, evenemang och mer.</p>
      <h4>Sektioner</h4>
      <ul>
        <li>
          <Link to="/">Nyheter</Link>
        </li>
        <li>
          <Link to="/education">Utbildning</Link>
        </li>
        <li>
          <Link to="/healthcare">Vård & Hälsa</Link>
        </li>
        <li>
          <Link to="/enterprise">Företag</Link>
        </li>
      </ul>
      <h4>Mer information</h4>
      <ul>
        <li>
          <Link to="/shopping">Shopping</Link>
        </li>
        <li>
          <Link to="/restaurants/cafe">Restuaranger</Link>
        </li>
        <li>
          <Link to="/event">Evenemang</Link>
        </li>
      </ul>

      <h4>Om appen</h4>
      <ul>
        <li>
          <Link to="/">Om oss</Link>
        </li>
        <li>
          <Link to="/">Kontakt</Link>
        </li>
        <li>
          <Link to="/">Intergritetpolicy</Link>
        </li>
        <li>
          <Link to="/">Användarvillkor</Link>
        </li>
      </ul>
    </footer>
  );
}
