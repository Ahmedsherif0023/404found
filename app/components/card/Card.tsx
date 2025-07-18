import React from 'react'
import './Card.css'; // Assuming you have a CSS file for styling

interface CardProps {
    title: string;
    description: string;
    img: string;
    showLearnMore?: boolean;
}

const Card: React.FC<CardProps> = ({ title, description, img, showLearnMore }) => {
    return (
        <div className="card-container">
            <div className="card">
                <img src={img} alt="Card Image" className="card-image" />
                <h2 className="card-title">{title}</h2>
                <p className="card-description">{description}</p>
                {showLearnMore && (
                    <button className="card-button">Learn More</button>
                )}
            </div>
        </div>
    );
}

export default Card