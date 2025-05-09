import PhotoCard from "../cards/PhotoCards";
import Nav from "../Nav";


const NewsPage = () => {
  const newsItems = [
    {
      image: "/ishall.png",
      title:
        "En investering på 6,5 miljoner kronor för att utveckla Borås ishall.",
      date: "två dagar sedan",
      description:
        "Kommunstyrelsen godkände förslaget som innebär en investeringsavgift på 6,5 miljoner kronor. Med dessa pengar ska Borås ishall få en ny läktardel med plats för 150 personer...",
      link: "https://www.boras.se/nyheter/nyheter/beslutikommunstyrelsenden5maj2025.5.1f2b506b1969f6e96e7e186.html",
    },
    {
      image: "/buss.png",
      title: "Borås testar nya elbussar i centrum.",
      date: "en vecka sedan",
      description:
        "En ny testperiod har inletts där elbussar ska trafikera centrala Borås. Målet är att minska utsläppen och förbättra luftkvaliteten i stadskärnan...",
      link: "https://www.boras.se/nyheter/nyheter/sommarskolkortforungdomarskickasimaj.5.3b2631181965f70626127574.html",
    },

    {
      image: "/skolarena.jpg",
      title: '"Skolan som arena" till Hässleholmen och Norrby',
      date: "Maj 2025",
      description:
        'Med 10 miljoner i EU-stöd expanderar Borås projektet "Skolan som arena" till två nya stadsdelar för att stärka barn och ungas möjligheter efter skoltid.',
      link: "https://www.mynewsdesk.com/se/boras-stad/pressreleases/boraas-stad-faar-tio-miljoner-kronor-foer-att-starta-skolan-som-arena-paa-tvaa-nya-omraaden-3281359",
    },
  
  ];

  return (
    <div>
      <Nav />

      <div style={{ padding: "20px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "16px",
          }}
        >
          <img
            src="/News.png"
            alt="Nyheter ikon"
            style={{ width: "40px", height: "40px", marginRight: "12px" }}
          />
          <div>
            <h1 style={{ fontSize: "1.5rem", margin: 0 }}>Nyheter</h1>
            <p style={{ fontSize: "0.9rem", margin: 0, color: "#555" }}>
              Senaste nyheter från Borås
            </p>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          {newsItems.map((item, index) => (
            <PhotoCard key={index} {...item} />
          ))}
        </div>
      </div>

    </div>
  );
};

export default NewsPage;
