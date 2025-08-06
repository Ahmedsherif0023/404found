import React from 'react'
import './JobCard.css'; // Assuming you have a CSS file for styling
import {Link} from "react-router-dom"; 

interface CardProps {
    title: string;
    description: string;
    img: string;
    showLearnMore?: boolean;
    
}

const JobCard: React.FC<CardProps> = ({ title, description, img, showLearnMore}) => {
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
                    <Link to="https://docs.google.com/forms/d/e/1FAIpQLSca3yPJv6pH190WvCS7L5UDpIRsheFyEg64LcUY0cW2DQ_O2w/viewform?usp=dialog" target="_blank"><button className="jobcard-button">Apply Now</button></Link>
                    
                )}
            </div>
        </div>
    );
}

export default JobCard