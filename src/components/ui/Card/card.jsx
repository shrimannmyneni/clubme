import React from 'react';
import './card.css'

function Card({ name, phone, hometown, image }) {
  return (
    <div class="card">
      <img src={image} alt={name} className="card-image" />
      <div className="card-info">
        <h3>{name}</h3>
        <p><strong>Phone:</strong> {phone}</p>
        <p><strong>Hometown:</strong> {hometown}</p>
      </div>
    </div>
  );
}

export default Card;
