import OptionCard from "../components/cards/OptionCard/OptionCard";
import Footer from "../components/Nav";
import Nav from "../components/Nav";

const EducationPage = () => {
  return (
    <div>
      <Nav />

      <div style={{ padding: "20px" }}>
        {/* Ikon och rubrik */}
        <div style={{ display: "flex", alignItems: "center", marginBottom: "16px" }}>
          <img
            src="/educationIcon.png"
            alt="Utbildning ikon"
            style={{ width: "40px", height: "40px", marginRight: "12px" }}
          />
          <div>
            <h1 style={{ fontSize: "1.5rem", margin: 0 }}>Utbildning</h1>
            <p style={{ fontSize: "0.9rem", margin: 0, color: "#555" }}>
              Information om skolor och utbildningar
            </p>
          </div>
        </div>

        {/* Option Cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <OptionCard
            title="Grundskolor"
            options={[
              { name: "Erikslundskolan", url: "https://www.erikslundskolan.se" },
              { name: "Bodaskolan", url: "https://www.bodaskolan.se" },
              { name: "Daltorpskolan", url: "https://www.daltorpskolan.se" },
              { name: "Engelbreksskolan", url: "https://www.engelbreksskolan.se" },
            ]}
          />

          <OptionCard
            title="Gymnasieutbildningar"
            options={[
              { name: "Sven Eriksonsgymnasiet", url: "https://www.boras.se/svenerikson" },
              { name: "Bäckängsgymnasiet", url: "https://www.boras.se/backang" },
              { name: "Almåsgymnasiet", url: "https://www.boras.se/almas" },
            ]}
          />

          <OptionCard
            title="Högre utbildning"
            options={[
              { name: "Högskolan i Borås", url: "https://www.hb.se" },
              { name: "Borås Yrkeshögskola", url: "https://www.boras.se/utbildningochforskola/yrkeshogskola.4.5c03c6f114b858fef800018827.html" },
            ]}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default EducationPage;