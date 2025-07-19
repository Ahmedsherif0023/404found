import React, { useState } from 'react'
import './FAQ.css'; // Assuming you have a CSS file for styling

interface CardProps {
    question: string;
    answer: string;
    showLearnMore?: boolean;
    number?: number; // Optional prop for numbering the FAQ
}

const FAQCard: React.FC<CardProps> = ({ question, answer, showLearnMore ,number}) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="FAQCard-container">
            <div className="FAQCard">
                <div className={`FAQCard-header${isOpen ? ' FAQCard-header-open' : ''}`}> 
                   
                   <div className="FAQCard-num">
                    {number}
                   </div>

                    <h2 className="FAQCard-question" style={{ margin: 0 }}>
                        {question}
                    </h2>
                     <span className="FAQCard-icon" style={{ fontSize: '2.5rem', marginRight: '10px' , display: 'flex', alignItems: 'center', cursor: 'pointer'}} onClick={() => setIsOpen((prev) => !prev)}>
                        {isOpen ? 'x' : '+'}
                    </span>
                </div>
                {isOpen && <p className="FAQCard-answer">{answer}</p>}
                {showLearnMore && (
                    <button className="FAQCard-button">Learn More</button>
                )}
            </div>
        </div>
    );
}

export default FAQCard



