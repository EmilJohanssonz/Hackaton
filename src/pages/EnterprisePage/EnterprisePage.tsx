import React from "react";
import "./EnterprisePage.css";
import SmalCard from "../../components/cards/smalCard/smalCard";


const EnterprisePage = () => {
  return (
    <div className="enterprise-container">
      <header className="enterprise-header">
        <div className="icon-box">
          <img src="/EnterpriseIcon.png" alt="Företagsikon" />
        </div>
        <div className="header-text">
          <h1>Företag</h1>
          <p>Lokala företag och tjänster</p>
        </div>
      </header>

      <SmalCard
        title="Hantverk & Bygg"
        items={["Borås Bygg AB", "Snickare i Borås", "Elinstationen Väst"]}
      />
      <SmalCard
        title="IT & Teknik"
        items={["Borås Datakonsult AB", "TechSupport Borås", "Digital Marknadsföring"]}
      />
      <SmalCard
        title="Skönhet & Hälsa"
        items={["Borås Spa & Wellness", "Frisörsalong Central", "Studio Nails"]}
      />
      <SmalCard
        title="Snickare AB"
        items={["Borås Bryggeri", "Delikatesser & Co", "Bageri Surdeg"]}
      />
      <SmalCard
        title="Mat & Dryck"
        items={["Borås snickare", "Delikatesser & Co", "Bageri Surdeg"]}
      />
      <SmalCard
        title="Hantverk & Bygg"
        items={[
          "Borås Byggteam AB",
          "Elproffsen Borås",
          "VVS & Rörmokare Väst",
          "Snickare i Borås"
        ]}
      />
      <SmalCard
        title="IT & Teknik"
        items={[
          "TechSupport Borås",
          "Borås Datakonsult AB",
          "ITFixarna Väst",
          "Digital Marknadsföring AB"
        ]}
      />
      <SmalCard
        title="Hushållsnära Tjänster"
        items={[
          "Trygga Barnvaktstjänst",
          "Gröna Fingrar Trädgård",
          "HemmaStyling Borås"
        ]}
      />
      <SmalCard
        title="Utbildning & Välmående"
        items={[
          "Privatlärarna Borås",
          "Mat & Passion Kockservice",
          "Studio Beauty Stylist",
          "Hälsocoach Direkt"
        ]}
      />
    </div>
  );
};

export default EnterprisePage;