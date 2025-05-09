import React from "react";
import "./HealthcarePage.css";

const HealthcarePage = () => {
  return (
    <div className="healthcare-container">
      <header className="healthcare-header">
        <div className="icon-box">
          <img src="/healthcareIcon.png" alt="Vårdikon" />
        </div>
        <div className="header-text">
          <h1>Vård & Hälsa</h1>
          <p>Sjukvård och tandvård i området</p>
        </div>
      </header>

      <section className="category-section">
        <h2>Vårdcentraler</h2>
        <div className="card">
          <h3>Närhälsan Borås</h3>

          <p>Centralt belägen vårdcentral med drop-in</p>
        </div>
        <div className="card">
          <h3>Herkules Vårdcenral</h3>
          <p>Komplett vårdcentral med BVC</p>
        </div>
        <div className="card">
          <h3>Närhälsan Sjöbo</h3>
          <p>Vårdcentral med familjeläkare</p>
        </div>
        <div className="card">
          <h3>Allekliniken Borås</h3>
          <p>Vårdcentral med drop-in</p>
        </div>
        <div className="card">
          <h3>Bästavårdcentralen Borås</h3>
          <p>Vårdcentral med BVC</p>
        </div>
        <div className="card">
          <h3>Bästavårdcentralen Borås</h3>
          <p>Vårdcentral med familjeläkare</p>
        </div>
      </section>

      <section className="category-section">
        <h2>Tandvård</h2>
        <div className="card">
          <p>Folktandvården Nära dig</p>
        </div>
        <div className="card">
          <p>Eriks tandvården Borås</p>
        </div>
        <div className="card">
          <p>Tand-tandvården Borås</p>
        </div>
        <div className="card">
          <p>Tandvården</p>
        </div>
        <div className="card">
          <p>Emils Tänder</p>
        </div>
      </section>
    </div>
  );
};

export default HealthcarePage;
