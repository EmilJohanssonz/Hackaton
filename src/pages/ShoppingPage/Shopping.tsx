import React from "react";
import "./ShoppingPage.css";

const ShoppingPage = () => {
  return (
    <div className="shopping-container">
      <header className="shopping-header">
        <div className="icon-box">
          <img src="/ShopingIcon.png" alt="Shoppingikon" />
        </div>
        <div className="header-text">
          <h1>Shopping</h1>
          <p>Butiker och Köpcentrum</p>
        </div>
      </header>

      <section className="category-section">
        <h2>Köpcentrum</h2>

        <div className="card">
          <h3>Knalleland</h3>
          <p>Det största köpcentrumet i Borås</p>
          <span className="opening-hours">Mån–Fre: 10–18</span>
          <span className="opening-hours">Lör-Sön: 12–16</span>
        </div>

        <div className="card">
          <h3>Borås City</h3>
          <p>Stadskärnans butiker och gallerior</p>
          <span className="opening-hours">Mån–Fre: 10–18</span>
          <span className="opening-hours">Lör-Sön: Stängt</span>
        </div>

        <div className="card">
          <h3>Lundaskog</h3>
          <p>Handelsområde med möbler och inredning</p>
          <span className="opening-hours">Mån–Fre: 10–18</span>
          <span className="opening-hours">Lör-Sön: 12–16</span>
        </div>
      </section>

      <div className="shopping-image">
        <img src="/Shoping-Image.png" alt="Shopping" />
        <h3>Textilstaden Borås</h3>
        <p>Borås har en lång historia som textilstad, och än idag finns många outlet-butiker med märkeskläder till bra priser. Besök Borås för en fantastisk shoppingupplevelse!</p>
      </div>
      <section className="category-section">
        <h2>Matbutiker</h2>

        <div className="card">
          <h3>ICA City Knalleland</h3>
          <p>Stort sortiment av mat, delikatesser och färdigrätter</p>
          <span className="opening-hours">Mån–Fre: 08–21</span>
          <span className="opening-hours">Lör–Sön: 09–20</span>
        </div>

        <div className="card">
          <h3>Willys Borås Centrum</h3>
          <p>Prisvärd matbutik med stort utbud</p>
          <span className="opening-hours">Mån–Fre: 08–21</span>
          <span className="opening-hours">Lör–Sön: 08–20</span>
        </div>

        <div className="card">
          <h3>Hemköp Norrby</h3>
          <p>Nära och bekväm matbutik i bostadsområdet</p>
          <span className="opening-hours">Mån–Fre: 07–22</span>
          <span className="opening-hours">Lör–Sön: 08–22</span>
        </div>

        <div className="card">
          <h3>Netto Sjöbo</h3>
          <p>Billiga basvaror och snabbköp</p>
          <span className="opening-hours">Mån–Fre: 08–20</span>
          <span className="opening-hours">Lör–Sön: 09–18</span>
        </div>

        <div className="card">
          <h3>City Gross Borås</h3>
          <p>Stormarknad med mat, kött, fisk och bakverk</p>
          <span className="opening-hours">Mån–Fre: 07–21</span>
          <span className="opening-hours">Lör–Sön: 08–20</span>
        </div>
      </section>
      <div className="shopping-image">
        <img src="/matImage.png" alt="Shopping" />
        <h3>Handla mat i Borås</h3>
        <p>Borås har väldigt många matkedjor att välja på! Här är en lista på butiker boråsare tycker om att besöka mest.</p>
      </div>

      <section className="category-section">
        <h2>Andra butiker</h2>

        <div className="card">
          <h3>Clas Ohlson Borås</h3>
          <p>Verktyg, heminredning, el & smarta prylar</p>
          <span className="opening-hours">Mån–Fre: 10–19</span>
          <span className="opening-hours">Lör–Sön: 10–17</span>
        </div>

        <div className="card">
          <h3>Jula Borås</h3>
          <p>Allt för hemmafixaren – verktyg, el, trädgård</p>
          <span className="opening-hours">Mån–Fre: 08–20</span>
          <span className="opening-hours">Lör–Sön: 10–18</span>
        </div>

        <div className="card">
          <h3>Elgiganten Borås</h3>
          <p>Hemelektronik, vitvaror och teknikprylar</p>
          <span className="opening-hours">Mån–Fre: 10–19</span>
          <span className="opening-hours">Lör–Sön: 10–17</span>
        </div>

        <div className="card">
          <h3>Cykelringen Borås</h3>
          <p>Cyklar, tillbehör och reparationer</p>
          <span className="opening-hours">Mån–Fre: 09–18</span>
          <span className="opening-hours">Lör: 10–15, Sön: Stängt</span>
        </div>

        <div className="card">
          <h3>Bauhaus Borås</h3>
          <p>Byggvaror, verktyg och trädgårdsprodukter</p>
          <span className="opening-hours">Mån–Fre: 07–20</span>
          <span className="opening-hours">Lör–Sön: 08–18</span>
        </div>
      </section>
      <section className="category-section">
        <h2>Second hand</h2>
        <div className="shopping-image">
          <img src="/secondHand.png" alt="Shopping" />
          <h3>Second Hand i Borås</h3>
          <p> Vår påverkan på planeten ska inte hindra barn från att gå i skolan. Second Hand i Borås – cirkulär shopping när den är som bäst!</p>
        </div>

        <div className="card">
          <h3>Erikshjälpen Second Hand</h3>
          <p>Stor butik med kläder, möbler och prylar för hela hemmet</p>
          <span className="opening-hours">Tis–Fre: 11–18</span>
          <span className="opening-hours">Lör: 10–15, Sön–Mån: Stängt</span>
        </div>

        <div className="card">
          <h3>Myrorna Borås</h3>
          <p>Miljövänligt shoppingval med kläder, böcker och hushållsartiklar</p>
          <span className="opening-hours">Mån–Fre: 10–18</span>
          <span className="opening-hours">Lör: 10–16, Sön: Stängt</span>
        </div>

        <div className="card">
          <h3>Ria Second Hand</h3>
          <p>Prisvärd butik som stödjer socialt arbete i Borås</p>
          <span className="opening-hours">Mån–Fre: 10–17</span>
          <span className="opening-hours">Lör–Sön: Stängt</span>
        </div>

        <div className="card">
          <h3>PMU Second Hand</h3>
          <p>Brett sortiment av möbler, kläder och leksaker</p>
          <span className="opening-hours">Ons–Fre: 12–17</span>
          <span className="opening-hours">Lör: 10–14, Övriga dagar: Stängt</span>
        </div>

        <div className="card">
          <h3>Emmaus Borås</h3>
          <p>Second hand med hållbart fokus och biståndsarbete</p>
          <span className="opening-hours">Mån–Fre: 11–18</span>
          <span className="opening-hours">Lör: 11–15, Sön: Stängt</span>
        </div>
      </section>



    </div>
  );
};

export default ShoppingPage;
