import React from "react";
import "./EventCard.css";

interface EventCardProps {
    image: string;
    title: string;
    date: string;
    time: string;
    location: string;
    description: string;
    link: string;
}

const EventCard: React.FC<EventCardProps> = ({
    image,
    title,
    date,
    time,
    location,
    description,
    link,
}) => {
    return (
        <div className="event-card">
            <img src={image} alt={title} className="event-image" />
            <div className="event-content">
                <h3>{title}</h3>
                <div className="event-details">
                    <span className="event-datetime">◩  {date}, {time}</span>
                    <span className="event-location">⨀ {location}</span>
                </div>
                <p className="event-description">{description}</p>
                <a href={link} className="event-link" target="_blank" rel="noopener noreferrer">
                    Mer information..
                </a>
            </div>
        </div>
    );
};

export default EventCard;
