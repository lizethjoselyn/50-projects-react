import React, { useState } from 'react';
import './CardsExpanding.css'

export function CardsExpanding({ elementos }) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!elementos || elementos.length < 3) {
    return <p>Debes proporcionar al menos 3 elementos en la lista.</p>;
  }

  return (
    <div className="container">
      {elementos.map((elemento, index) => (
        <div 
          key={index} 
          className={`panel ${index === activeIndex ? 'active' : ''}`} 
          style={{ backgroundImage: `url('${elemento.imagen}')` }}
          onClick={() => setActiveIndex(index)}
        >
          <h3>{elemento.texto}</h3>
        </div>
      ))}
    </div>
  );
}