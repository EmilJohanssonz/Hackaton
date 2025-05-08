export default function Footer() {
    return (
        <footer style={{ backgroundColor: "#f8f9fa", padding: "20px", textAlign: "center" }}>
            <p style={{ margin: 0, fontSize: "0.9rem", color: "#555" }}>
                &copy; {new Date().getFullYear()} Din Företagsnamn. Alla rättigheter förbehållna.
            </p>
            <p style={{ margin: 0, fontSize: "0.8rem", color: "#777" }}>
                Integritetspolicy | Användarvillkor
            </p>
        </footer>
    );
}
