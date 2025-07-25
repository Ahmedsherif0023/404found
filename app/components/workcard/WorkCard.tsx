import React from 'react'
import './WorkCard.css'; // Assuming you have a CSS file for styling
import { TbExternalLink } from "react-icons/tb";

interface CardProps {
    title: string;
    title2: string;
    img: string;
    description:string;
    Link?: string; // Optional prop for the link
}

const WorkCard: React.FC<CardProps> = ({ title, img,title2,description,Link}) => {
    const [copied, setCopied] = React.useState(false);

    function handleCopy(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
        event.preventDefault();
        if (Link) {
            navigator.clipboard.writeText(Link);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        }
    }

    return (
        <div className="WorkCard-container">
            <div className="Workcard">
                <h1 className="WorkCard-title">{title}</h1>
                <div className="image-container">
                    <img src={img} alt="Work Image" className="card-image" />
                </div>
                       <div className="CardLink flex">
                         <div className='copy-btn'>
                             <button
                                 className="copy-link-btn"
                                 onClick={handleCopy}
                             >
                                 Copy Link
                             </button>
                         
                       </div>
                         <div className="Link-Icon">
                             {Link && (
                                 <a href={Link} target="_blank" rel="noopener noreferrer">
                                     <TbExternalLink />
                                 </a>
                             )}
                         </div>
                    </div>
                        {copied && (
                            <div className="copy-popup">Link copied</div>
                        )}
                    <p>{description}</p>
                </div>
            </div>
    );
}

export default WorkCard