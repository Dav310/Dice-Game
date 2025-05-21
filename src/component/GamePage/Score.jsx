import React from 'react';

const Score = ({ toScore }) => {
  return (
    <div className="w-full sm:w-auto text-center mb-6 sm:mb-0"> 
      <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold m-0">{toScore}</h1>
      <p className="text-xl sm:text-2xl md:text-3xl font-semibold mt-2">Total Score</p>
    </div>
  );
};

export default Score;