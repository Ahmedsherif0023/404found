import React from 'react'
import './StoryPoint.css'; // Assuming you have a CSS file for styling

interface CardProps {
    title: string;
    num: string;
    Describtion: string;
}

const StoryPoint: React.FC<CardProps> = ({ title,  num ,Describtion}) => {
    return (
        <div className="StoryPoint-container">
            <div className="StoryPoint">
                <div className="StoryPoint-header">
                    <div className="num-container">
                        <h1>{num}</h1>
                    </div>
                    <h2 className="StoryPoint-title">{title}</h2>
                </div>
                <p className="StoryPoint-desc">{Describtion}</p>
              
                
            </div>
        </div>
    );
}

export default StoryPoint