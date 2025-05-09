import React from "react";
import "./InfoCard.css";

interface InfoCardProps {
    title: string;
    description: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, description }) => {
    return (
        <div className="info-card">
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    );
};

export default InfoCard;