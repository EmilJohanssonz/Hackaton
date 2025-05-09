import React from "react";
import "./EventPage.css";
import EventCard from "../../components/cards/eventCard/EventCard";

const EventPage = () => {
  return (
    <div className="event-container">
      <header className="event-header">
        <div className="icon-box">
          <img src="/EventIcon.png" alt="Eventikon" />
        </div>
        <div className="header-text">
          <h1>Evenemang</h1>
          <p>Vad händer i Borås?</p>
        </div>
      </header>

      <EventCard
        image="/event1.png"
        title="Sommarfestival i stadsparken"
        date="2025-06-15"
        time="12:00 – 22:00"
        location="Stadsparken"
        description="Musik, mat och aktiviteter för hela familjen under årets stora sommarfestival."
        link="#"
      />

      <EventCard
        image="/event2.png"
        title="Konst & Hantverk Marknad"
        date="2025-05-20"
        time="10:00 – 16:00"
        location="Stora Torget"
        description="Lokala konstnärer och hantverkare visar upp och säljer sina alster."
        link="#"
      />

      <EventCard
        image="/teater.png"
        title="Teaterföreställning: Borås Historia"
        date="2025-05-10"
        time="19:00 – 21:00"
        location="Borås Teater"
        description="En fascinerande resa genom stadens historia framförd av lokala skådespelare."
        link="#"
      />
    </div>
  );
};

export default EventPage;
