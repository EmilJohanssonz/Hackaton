import React from "react";
import "./SmalCard.css";

interface SmalCardProps {
    title: string;
    items: string[];
    link?: string; // valfri länk
}

const SmalCard: React.FC<SmalCardProps> = ({ title, items, link }) => {
    const Wrapper = link ? "a" : "div";

    return (
        <Wrapper
            className="smal-card"
            {...(link ? { href: link, target: "_blank", rel: "noopener noreferrer" } : {})}
        >
            <h3>{title}</h3>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </Wrapper>
    );
};

export default SmalCard;
