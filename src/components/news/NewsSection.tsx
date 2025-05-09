import { useState } from "react";
import "./NewsSection.scss";

const news = [
  {
    id: 1,
    title:
      "En investering på 6,5 miljoner kronor för att utveckla Borås ishall.",
    date: "två dagar sedan",
    image: "ishall.png",
    content: `Kommunstyrelsen godkände förslaget som innebär en investeringsavgift på 6,5 miljoner kronor. Med dessa pengar ska Borås ishall få en ny läktardel med plats för 150 personer som byggs på kortsidan av ishallen. Den nya sektionen kommer att innehålla kiosk och toaletter. Ombyggnationen sker inom den befintliga byggnaden och är planerad att starta i april 2025, med inflyttning i september 2025.`,
  },
  {
    id: 2,
    title: "Nya elbussar börjar rulla i stadstrafiken i Borås.",
    date: "en vecka sedan",
    image: "buss.png",
    content: `Borås kollektivtrafik investerar i miljövänliga transporter. Elbussarna ska minska utsläppen med 40% och börja rulla i maj. Totalt rör det sig om 15 nya fordon som laddas via snabbladdning nattetid.`,
  },
];

const NewsSection = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="news-wrapper">
      <div className="header">
        <img src="/News.png" alt="Nyheter" width={50} height={50} />
        <div>
          <h2>Nyheter</h2>
          <p>Senaste nyheter från Borås</p>
        </div>
      </div>

      {news.map((item) => {
        const isExpanded = expandedId === item.id;

        return (
          <article key={item.id} className="news-card">
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <span>{item.date}</span>
            <p>
              {isExpanded ? item.content : item.content.slice(0, 100) + "..."}
            </p>
            <button onClick={() => toggleExpand(item.id)}>
              {isExpanded ? "Visa mindre" : "Läs mer"}
            </button>
          </article>
        );
      })}
    </section>
  );
};

export default NewsSection;
