import { useEffect, useState } from "react";

const StartPage = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="startpage">
      <div className="imgLayer">
        <div className={`icon ${show ? "show" : ""}`}>
          <img src="Skarmbild_2025-05-07_160140.png" height={400} width={350} />
        </div>
        <div className={`title ${show ? "show" : ""}`}>
          <h2>Borås</h2>
          <h4 className="stad">STAD</h4>
        </div>
      </div>
    </div>
  );
};

export default StartPage;
