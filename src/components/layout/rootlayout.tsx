import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const RootLayout = () => {
  return (
    <div>
      <Header />
      {/* Huvudinnehåll */}
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
