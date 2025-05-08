import React from "react";
import "./OptionCard.css";

type SchoolOption = {
    name: string;
    url: string;
}

type OptionCardProps = {
    title: string;
    options: SchoolOption[];
}

const OptionCard: React.FC<OptionCardProps> = ({ title, options }) => {
    return (
        <div className="option-card">
            <h3>{title}</h3>
            <ul>
                {options.map((school, index) => (
                    <li key={index} className="option-item">
                        <a href={school.url} target="_blank" rel="noopener noreferrer">
                            {school.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default OptionCard;