import React from 'react'
import './ProcessSteps.css'; // Assuming you have a CSS file for styling

interface CardProps {
    title: string;
    num: string;
    Describtion: string;
}

const ProcessSteps: React.FC<CardProps> = ({ title,  num ,Describtion}) => {
    return (
        <div className="ProcessStep-container">
            <div className="ProcessStep">
                <div className="ProcessStep-header">
                    <div className="num-container">
                        <h1>{num}</h1>
                    </div>
                    <h2 className="ProcessStep-title">{title}</h2>
                </div>
                <p className="ProcessStep-desc">{Describtion}</p>
              
                
            </div>
        </div>
    );
}

export default ProcessSteps