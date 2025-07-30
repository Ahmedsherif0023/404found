import React from 'react'
import './JobCard.css'; // Assuming you have a CSS file for styling

interface CardProps {
    title: string;
    description: string;
    img: string;
    showLearnMore?: boolean;
}

const JobCard: React.FC<CardProps> = ({ title, description, img, showLearnMore }) => {
    return (
        <div className="jobcard-container">
            <div className="jobcard">
                <div className="jobcard-image-container">
                    <img src={img} alt="Card Image" className="jobcard-image" />
                </div>
               <div className="job-text">
                 <h2 className="jobcard-title">{title}</h2>
                 <p className="jobcard-description">{description}</p>
               </div>
                {showLearnMore && (
                    <button className="jobcard-button">Apply Now</button>
                )}
            </div>
        </div>
    );
}

export default JobCard