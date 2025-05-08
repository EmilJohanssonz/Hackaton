import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div>
      {/* Huvudinnehåll */}
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
