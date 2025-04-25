import React from 'react';
import './card.css';

function Card({ name, phone, hometown, image }) {
  return (
    <div className="card">
      <img src={image} alt={`Headshot of ${name}, from ${hometown}`} />
      <div className="card-content">
        <p><strong>{name}</strong></p>
        <p><strong>Phone:</strong> {phone}</p>
        <p><strong>Hometown:</strong> {hometown}</p>
      </div>
    </div>
  );
}

export default Card;
