import './ResturangPage.scss';

const RestaurantPage = () => {
  return (
    <div className="restaurant-page">
      <header className="restaurant-header">
        <h1>Restauranger och Caféer</h1>
        <p>Här är en lista över restauranger och caféer i området:</p>
      </header>

      <section className="category">
        <h2>Italienskt</h2>
        <div className="card-grid">
          <div className="restaurant-card">
            <div className="name">Restaurang Italia</div>
            <div className="rating">★★★★☆</div>
          </div>
          <div className="restaurant-card">
            <div className="name">Pizzeria Napoli</div>
            <div className="rating">★★★★★</div>
          </div>
          <div className="restaurant-card">
            <div className="name">Trattoria Roma</div>
            <div className="rating">★★★★☆</div>
          </div>
        </div>
      </section>

      <section className="category">
        <h2>Asiatiskt</h2>
        <div className="card-grid">
          <div className="restaurant-card">
            <div className="name">Sushi Yama</div>
            <div className="rating">★★★★☆</div>
          </div>
          <div className="restaurant-card">
            <div className="name">Thai Garden</div>
            <div className="rating">★★★★☆</div>
          </div>
          <div className="restaurant-card">
            <div className="name">China House</div>
            <div className="rating">★★★☆☆</div>
          </div>
        </div>
      </section>

      <section className="category">
        <h2>Café & Bageri</h2>
        <div className="card-grid">
          <div className="restaurant-card">
            <div className="name">Viskan Café</div>
            <div className="rating">★★★★★</div>
          </div>
          <div className="restaurant-card">
            <div className="name">Espresso House</div>
            <div className="rating">★★★★☆</div>
          </div>
          <div className="restaurant-card">
            <div className="name">Kanelbullen</div>
            <div className="rating">★★★★☆</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RestaurantPage;
