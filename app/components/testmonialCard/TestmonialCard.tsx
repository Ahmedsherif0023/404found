import React from 'react'
import './TestmonialCard.css'; // Assuming you have a CSS file for styling

interface CardProps {
    title: string;
    description: string;
    img: string;
    showLearnMore?: boolean;
    personName?: string;
    personRole?: string;
}

const TestmonialCard: React.FC<CardProps> = ({ title, description, img, showLearnMore,personName,personRole }) => {
    return (
        <div className="TestCard-container">
            <div className="card">
                <h2 className="TestCard-title">{title}</h2>
                <p className="TestCard-description">{description}</p>
                {showLearnMore && (
                    <button className="card-button">Learn More</button>
                )}
                <div className='person-work'>
                   <div className='person'>
                     <img src={img} alt="Card Image" className="card-image" />
                     <div className="person-data">
                         <h3 className="person-name">{personName}</h3>
                         <p className="person-role">{personRole}</p>
                     </div>
                   </div>
                <div className="website-btn">
                    <a href="#">Show Website</a>
                </div>
                </div>
            </div>
        </div>
    );
}

export default TestmonialCard