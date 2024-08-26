import React, { useState } from 'react';

function FlipCard({ image, title, description }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="relative w-full h-64 sm:w-1/2 md:w-1/3 lg:w-[25vw] md:h-72"
      style={{ perspective: '1000px' }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div
        className={`absolute w-full h-full transition-transform duration-500 ${
          flipped ? 'transform rotate-y-180' : ''
        }`}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div
          className="flip-card-front absolute w-full h-full"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div
          className="flip-card-back absolute w-full h-full bg-yellow-400 text-center p-4 rounded-lg"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold">{title}</h2>
          <p className="text-xs sm:text-sm md:text-base text-justify">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;  