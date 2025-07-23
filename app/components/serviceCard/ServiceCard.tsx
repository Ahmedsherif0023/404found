import React from 'react'
import './ServiceCard.css'; // Assuming you have a CSS file for styling

interface CardProps {
    title: string;
    img: string;
}

const SeerviceCard: React.FC<CardProps> = ({ title, img}) => {
    return (
        <div className="ServiceCard-container">
            <div className="Servicecard">
                <div className="image-container">
                    <img src={img} alt="Service Image" className="card-image" />
                </div>
                <h2 className="ServiceCard-title">{title}</h2>
              
                
            </div>
        </div>
    );
}

export default SeerviceCard