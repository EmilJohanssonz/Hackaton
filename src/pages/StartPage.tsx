import { useEffect, useState } from "react";

import "../components/startpage/StartPage.scss";
import NewsPage from "../components/newspage/newspage";

const StartPage = () => {
  const [showImage, setShowImage] = useState(false);
  const [showText, setShowText] = useState(false);
  const [showNews, setShowNews] = useState(false);

  const [city, setCity] = useState<keyof typeof cityData>("Borås");

  useEffect(() => {
    const timer1 = setTimeout(() => setShowImage(true), 200);
    const timer2 = setTimeout(() => setShowText(true), 900);
    const timer3 = setTimeout(() => {
      setShowNews(true);
    }, 2500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  // Data för städer
  const cityData = {
    Borås: {
      logo: "/borasLogo.png",
      title: "Borås",
      subtitle: "STAD",
      welcomeText: "Välkommen till",
      description:
        "Din kompletta guide till allt som händer i vår stad. Upptäck lokala nyheter, evenemang, tjänster och mycket mera.",
    },
    Malmö: {
      logo: "/malmoLogo.png",
      title: "Malmö",
      subtitle: "STAD",
      welcomeText: "Välkommen till",
      description:
        "Upptäck allt som Malmö har att erbjuda. Från kultur och evenemang till lokala nyheter och tjänster.",
    },
  };

  const currentCity = cityData[city];

  return (
    <>
      <div className="city-switcher">
        <button onClick={() => setCity("Borås")}>Borås</button>
        <button onClick={() => setCity("Malmö")}>Malmö</button>
      </div>
      <div className="startpage">
        <div className="imgLayer">
          <div className={`icon ${showImage ? "show" : ""}`}>
            <img
              src={currentCity.logo}
              height={400}
              width={350}
              alt={currentCity.title}
            />
          </div>
          <div className={`title ${showImage ? "show" : ""}`}>
            <h2>{currentCity.title}</h2>
            <h4 className="stad">{currentCity.subtitle}</h4>
          </div>
        </div>

        <div className={`textStad ${showText ? "show" : ""}`}>
          <p>{currentCity.welcomeText}</p>
          <h5>{currentCity.title}</h5>
          <p>{currentCity.description}</p>
          <div className="buttons">
            <button
              style={{
                backgroundColor: city === "Malmö" ? "green" : "red",
                color: "white",
              }}
            >
              Utforska {currentCity.title}
            </button>

            <button
              style={{
                backgroundColor: city === "Malmö" ? "green" : "red",
                color: "white",
              }}
            >
              Om appen
            </button>
          </div>
        </div>
      </div>
      <div className={`news-section-wrapper ${showNews ? "show" : ""}`}>
        <NewsPage />
      </div>
    </>
  );
};

export default StartPage;

// import { useEffect, useState } from "react";

// import "../components/startpage/StartPage.scss";
// import NewsPage from "../components/newspage/newspage";

// const StartPage = () => {
//   const [showImage, setShowImage] = useState(false);
//   const [showText, setShowText] = useState(false);
//   const [showNews, setShowNews] = useState(false);

//   const [city, setCity] = useState<keyof typeof cityData>("Borås");

//   useEffect(() => {
//     const timer1 = setTimeout(() => setShowImage(true), 200);
//     const timer2 = setTimeout(() => setShowText(true), 900);
//     const timer3 = setTimeout(() => {
//       setShowNews(true);
//     }, 2500);

//     return () => {
//       clearTimeout(timer1);
//       clearTimeout(timer2);
//       clearTimeout(timer3);
//     };
//   }, []);

//   // Data för städer
//   const cityData = {
//     Borås: {
//       logo: "/HomeImage-Borås.png",
//       title: "Borås",
//       subtitle: "STAD",
//       welcomeText: "Välkommen till",
//       description:
//         "Din kompletta guide till allt som händer i vår stad. Upptäck lokala nyheter, evenemang, tjänster och mycket mera.",
//     },
//     Malmö: {
//       logo: "/HomeImage-Malmö.png",
//       title: "Malmö",
//       subtitle: "STAD",
//       welcomeText: "Välkommen till",
//       description:
//         "Upptäck allt som Malmö har att erbjuda. Från kultur och evenemang till lokala nyheter och tjänster.",
//     },
//   };

//   const currentCity = cityData[city];

//   return (
//     <>
//       <div className="city-switcher">
//         <button onClick={() => setCity("Borås")}>Borås</button>
//         <button onClick={() => setCity("Malmö")}>Malmö</button>
//       </div>
//       <div className="startpage">
//         <div className="imgLayer">
//           <div className={`icon ${showImage ? "show" : ""}`}>
//             <img
//               src={currentCity.logo}
//               height={400}
//               width={350}
//               alt={currentCity.title}
//             />
//           </div>
//           <div className={`title ${showImage ? "show" : ""}`}>
//             <h2>{currentCity.title}</h2>
//             <h4 className="stad">{currentCity.subtitle}</h4>
//           </div>
//         </div>

//         <div className={`textStad ${showText ? "show" : ""}`}>
//           <p>{currentCity.welcomeText}</p>
//           <h5>{currentCity.title}</h5>
//           <p>{currentCity.description}</p>
//           <div className="buttons">
//             <button
//               style={{
//                 backgroundColor: city === "Malmö" ? "green" : "red",
//                 color: "white",
//               }}
//             >
//               Utforska {currentCity.title}
//             </button>

//             <button
//               style={{
//                 backgroundColor: city === "Malmö" ? "green" : "red",
//                 color: "white",
//               }}
//             >
//               Om appen
//             </button>
//           </div>
//         </div>
//       </div>
//       <div className={`news-section-wrapper ${showNews ? "show" : ""}`}>
//         <NewsPage />
//       </div>
//     </>
//   );
// };

// export default StartPage;
