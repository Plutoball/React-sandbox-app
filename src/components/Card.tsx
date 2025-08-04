//creating a sample card component with a button

import react from 'react';
import "./Card.css"; // A CSS file for styling the card
import React from 'react';
// Card component to display product information

const Card: React.FC<{ title: string; description: string; onButtonClick: () => void }> = ({ title, description, onButtonClick }) => { //these are the card properties
    return (
        <div className="card">
            <h2>{title}</h2>
            <p>{description}</p>
            <button onClick={onButtonClick}>Learn More</button>
        </div>
    );
};
// This Card component takes a title, description, and an onButtonClick function as props.
// It displays the title and description, and includes a button that triggers the onButtonClick function when clicked. 


export default  Card;
