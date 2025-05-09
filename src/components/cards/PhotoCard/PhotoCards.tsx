import React from 'react';
import './PhotoCard.css';

interface PhotoCardProps {
  image: string;
  title: string;
  date: string;
  description: string;
  link: string;
}

const PhotoCard: React.FC<PhotoCardProps> = ({
  image,
  title,
  date,
  description,
  link,
}) => {
  return (
    <div className="app-container">
      <div className="photo-card">
        <div className="photo-card__top-bar" />
        <div className="photo-card__image-container">
          <img src={image} alt={title} className="photo-card__image" />
        </div>
        <div className="photo-card__content">
          <h2>{title}</h2>
          <p className="photo-card__date">{date}</p>
          <p className="photo-card__description">{description}</p>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="photo-card__link"
          >
            Läs mer
          </a>
        </div>
      </div>
    </div>
  );
};

export default PhotoCard;
