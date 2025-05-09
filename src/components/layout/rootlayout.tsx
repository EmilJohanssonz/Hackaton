import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const RootLayout = () => {
  return (
    <div>
      <Header />
      {/* Huvudinnehåll */}
      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default RootLayout;
